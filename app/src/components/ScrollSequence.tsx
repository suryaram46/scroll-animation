import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ScrollSequenceProps {
    folderName: string;
    frameCount: number;
    textConfig: 'sequence1' | 'sequence2';
}

const ScrollSequence = ({ folderName, frameCount, textConfig }: ScrollSequenceProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);


    // Set up scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // We use a spring to smooth out the scroll progress slightly so the video feeling is polished
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress (0...1) to frame index (1...167)
    const currentFrame = useTransform(
        smoothProgress,
        [0, 1],
        [1, frameCount]
    );

    // Load all images on mount
    useEffect(() => {
        const loadImages = () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                // Format index to match "ezgif-frame-001.jpg"
                const indexStr = i.toString().padStart(3, '0');
                img.src = `/${folderName}/ezgif-frame-${indexStr}.jpg`;

                img.onload = () => {
                    loadedCount++;
                    setImagesLoaded(loadedCount);
                };

                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        loadImages();
    }, [folderName, frameCount]);

    // Draw frame to canvas when currentFrame changes
    useEffect(() => {
        const unsubscribe = currentFrame.on('change', (latest) => {
            const frameIndex = Math.min(Math.max(1, Math.floor(latest)), frameCount);
            const image = images[frameIndex - 1]; // Array is 0-indexed

            if (image && image.complete && canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d', { alpha: false }); // Optimize no transparency
                if (!ctx) return;

                // Maximize DPR for clear images, using default high res if possible
                const dpr = window.devicePixelRatio || 1;
                const width = window.innerWidth;
                const height = window.innerHeight;

                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                // Set high quality smoothing for rendering
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = image.width / image.height;

                let drawWidth = canvas.width;
                let drawHeight = canvas.height;
                let offsetX = 0;
                let offsetY = 0;

                // Standard "cover" logic for all devices to remove black bars
                if (imgRatio > canvasRatio) {
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                } else {
                    drawHeight = canvas.width / imgRatio;
                    offsetY = (canvas.height - drawHeight) / 2;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
            }
        });

        return () => unsubscribe();
    }, [currentFrame, images]);

    // Re-draw when window resizes
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current || images.length === 0) return;
            const latest = currentFrame.get();
            const frameIndex = Math.min(Math.max(1, Math.floor(latest)), frameCount);
            const image = images[frameIndex - 1];

            if (image && image.complete) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d', { alpha: false });
                if (!ctx) return;

                const dpr = window.devicePixelRatio || 1;
                const width = window.innerWidth;
                const height = window.innerHeight;

                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = image.width / image.height;

                let drawWidth = canvas.width;
                let drawHeight = canvas.height;
                let offsetX = 0;
                let offsetY = 0;

                if (imgRatio > canvasRatio) {
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                } else {
                    drawHeight = canvas.width / imgRatio;
                    offsetY = (canvas.height - drawHeight) / 2;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentFrame, images]);


    // TEXT OPACITY TRANSFORMS
    // 0% - 20%: "Your dream home is waiting." (Fade out before 20%)
    const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.18, 0.20], [1, 1, 0, 0]);

    // 25% - 50%: "Modern finishes in every corner." (Fade in 25%, fade out by 50%)
    const text2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.50], [0, 1, 1, 0]);

    // 55% - 80%: "Expansive views you won’t find elsewhere." (Fade in 55%, out 80%)
    const text3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.80], [0, 1, 1, 0]);

    // 85% - 100%: "Schedule your private tour today." (Fade in 85%)
    const text4Opacity = useTransform(scrollYProgress, [0.8, 0.85, 1], [0, 1, 1]);

    // CTA Button: appear at end of scroll (95% - 100%)
    const ctaOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
    const ctaY = useTransform(scrollYProgress, [0.95, 1], [20, 0]);


    return (
        <section ref={containerRef} className="relative h-[400vh] bg-black">
            {/* Loading Indicator */}
            {imagesLoaded < frameCount && (
                <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black z-50 text-white flex-col gap-4">
                    <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-amber-500 transition-all duration-300 ease-out"
                            style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
                        />
                    </div>
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
                        Welcome ({Math.round((imagesLoaded / frameCount) * 100)}%)
                    </p>
                </div>
            )}

            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay Removed */}

                {/* --- Text Overlays Sequence 2 --- */}
                {textConfig === 'sequence2' && (
                    <>
                        <motion.div
                            style={{ opacity: text1Opacity }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)] mb-4 text-center">
                                Your dream home is waiting.
                            </h2>
                        </motion.div>

                        <motion.div
                            style={{ opacity: text2Opacity }}
                            className="absolute bottom-32 md:bottom-24 left-6 md:left-16 max-w-[250px] md:max-w-lg pointer-events-none"
                        >
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)] mb-4">
                                Modern finishes in every corner.
                            </h3>
                        </motion.div>

                        <motion.div
                            style={{ opacity: text3Opacity }}
                            className="absolute top-28 md:top-32 right-6 md:right-16 max-w-[200px] md:max-w-lg pointer-events-none text-right"
                        >
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)] mb-4">
                                Expansive views you won’t<br />find elsewhere.
                            </h3>
                        </motion.div>

                        <motion.div
                            style={{ opacity: text4Opacity }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 gap-6 md:gap-8"
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)] mb-2 md:mb-4 uppercase text-center">
                                Schedule your private<br />tour today.
                            </h2>
                            <motion.button
                                style={{ opacity: ctaOpacity, y: ctaY }}
                                className="pointer-events-auto bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                Book Now
                            </motion.button>
                        </motion.div>
                    </>
                )}

                {/* --- Text Overlays Sequence 1 --- */}
                {textConfig === 'sequence1' && (
                    <>
                        <motion.div
                            style={{ opacity: text1Opacity }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-white text-center tracking-tight drop-shadow-xl">
                                Welcome to Surya.
                            </h2>
                        </motion.div>

                        <motion.div
                            style={{ opacity: text2Opacity }}
                            className="absolute bottom-16 md:bottom-24 left-6 md:left-16 max-w-lg pointer-events-none"
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-white tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                                A Legacy of Trust.
                            </h3>
                        </motion.div>

                        <motion.div
                            style={{ opacity: text3Opacity }}
                            className="absolute top-24 md:top-32 right-6 md:right-16 max-w-lg pointer-events-none text-right"
                        >
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans text-white tracking-[0.05em] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] italic font-light">
                                Experience Unmatched<br />Quality.
                            </h3>
                        </motion.div>

                        <motion.div
                            style={{ opacity: text4Opacity }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 gap-8"
                        >
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans text-white font-black uppercase tracking-tighter text-center drop-shadow-2xl">
                                Your Journey Begins Here.
                            </h2>
                            <motion.button
                                style={{ opacity: ctaOpacity, y: ctaY }}
                                className="pointer-events-auto bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-5 rounded-full text-lg shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                Explore
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ScrollSequence;
