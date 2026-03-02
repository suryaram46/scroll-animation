import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useTransform, motion } from 'motion/react';

const TOTAL_FRAMES = 151;

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    // Load images on mount
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            // Pad to 3 digits e.g. 001, 010, 151
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `/sequence-1/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Framer Motion Scroll hooks
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Function to draw a specific frame to the canvas based on scroll progress
    const drawFrame = (progress: number) => {
        if (images.length === 0 || !canvasRef.current) return;

        // Map progress (0 -> 1) to frame index (0 -> TOTAL_FRAMES - 1)
        const frameIndex = Math.min(
            Math.floor(progress * TOTAL_FRAMES),
            TOTAL_FRAMES - 1
        );

        // Safety check just in case image isn't loaded or array is empty
        if (!images[frameIndex] || !images[frameIndex].complete) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency
        if (!ctx) return;

        const img = images[frameIndex];

        // Get actual physical pixels of the canvas
        const width = canvas.width;
        const height = canvas.height;

        const canvasRatio = width / height;
        const imgRatio = img.width / img.height;
        let drawWidth = width;
        let drawHeight = height;
        let offsetX = 0;
        let offsetY = 0;

        // Slight zoom applied (1.15x) as requested
        const zoom = 1.15;

        // Object-fit: cover logic using physical canvas dimensions
        if (imgRatio > canvasRatio) {
            drawHeight = height * zoom;
            drawWidth = drawHeight * imgRatio;
        } else {
            drawWidth = width * zoom;
            drawHeight = drawWidth / imgRatio;
        }

        offsetX = (width - drawWidth) / 2;
        offsetY = (height - drawHeight) / 2;

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Track scroll and draw to canvas
    useMotionValueEvent(scrollYProgress, "change", drawFrame);

    // Initial draw once images are loaded
    useEffect(() => {
        if (imagesLoaded === TOTAL_FRAMES) {
            drawFrame(scrollYProgress.get());
        }
    }, [imagesLoaded]);

    // Handle Resize for Canvas (High-DPI Support)
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            // Use device pixel ratio for crystal clear rendering on retina/4k displays
            // Cap at 2 to balance performance and quality, though users can go higher if needed.
            const dpr = Math.min(window.devicePixelRatio || 1, 3);
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Set actual internal resolution to physical pixels to handle 4k displays
            canvas.width = width * dpr;
            canvas.height = height * dpr;

            // Set CSS visual size
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            // Note: We deliberately do NOT use ctx.scale(dpr,dpr) here so that ctx.drawImage
            // utilizes the full native resolution of `canvas.width/height` calculated above.

            // Redraw current frame
            if (images.length > 0) {
                drawFrame(scrollYProgress.get());
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // trigger once on mount

        return () => window.removeEventListener('resize', handleResize);
    }, [images]);



    // Loading Screen if images aren't fully loaded
    const percentage = Math.round((imagesLoaded / TOTAL_FRAMES) * 100);

    // Scroll-linked text Opacities defined by keyframe percentages of the 400vh scroll
    // Slower, overlapping transitions

    // 0.85 to 1.0: Reveal Builder Name
    const finalLogoOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const finalLogoY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            {/* Sticky Container for visual contents */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Loading Overlay */}
                {imagesLoaded < TOTAL_FRAMES && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
                        <div className="text-white text-2xl font-bold tracking-tight mb-4">Welcome</div>
                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-amber-500 transition-all duration-300"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <div className="text-slate-500 mt-2 text-sm">{percentage}%</div>
                    </div>
                )}

                {/* Video Scrub Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Scroll-Revealed Text Overlays */}
                <div className="absolute inset-0 z-20 flex items-center justify-start pointer-events-none px-6 md:px-24">

                    {/* Stats removed per user request */}

                    {/* Final Logo Reveal */}
                    <motion.div
                        className="absolute inset-0 md:inset-auto md:inset-x-0 md:bottom-32 flex flex-col items-center justify-center text-center px-4"
                        style={{ opacity: finalLogoOpacity, y: finalLogoY }}
                    >
                        <h1 className="text-3xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] mb-4 leading-tight">
                            Best Builders in Madurai <span className="text-transparent border-t border-b bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">-</span>
                            <br className="hidden md:block" /> surya homes
                        </h1>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
