import { motion } from 'motion/react';
import { useState } from 'react';
import Counter from './Counter';
import ScrollSequence from './ScrollSequence';

const marqueeTexts = [
    "32+ Years of Craftsmanship",
    "5,000+ Masterfully Built Homes",
    "85+ Dedicated Real Estate Experts",
    "Awarded CREDAI Fairpro Excellence"
];

const Sections = () => {

    // Mock data for projects
    const projects = [
        {
            title: "Meadowview Cottage",
            price: "$820,900",
            location: "135 Campaspe Way, Point Cook, Vic",
            beds: 3,
            sqft: "8,582 ft²",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Whispering Pines",
            price: "$420,900",
            location: "51 Spotted Gum Boulevard, Wauchope",
            beds: 3,
            sqft: "8,582 ft²",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Riverfront Oasis",
            price: "$620,900",
            location: "6 Kavanagh Lane, Clyde North",
            beds: 3,
            sqft: "8,582 ft²",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Sunset Boulevard Villa",
            price: "$950,000",
            location: "12 Sunset Drive, Malvern East",
            beds: 4,
            sqft: "10,200 ft²",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Highland Grandeur",
            price: "$1,120,000",
            location: "88 Highland Ave, Toorak",
            beds: 5,
            sqft: "12,500 ft²",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Oceanview Penthouse",
            price: "$2,300,000",
            location: "1 Ocean Road, Brighton",
            beds: 3,
            sqft: "6,800 ft²",
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const [showAllProperties, setShowAllProperties] = useState(false);
    const displayedProjects = showAllProperties ? projects : projects.slice(0, 3);


    return (
        <div className="relative z-10 font-sans">

            {/* Why Choose Us Section */}
            <div className="bg-slate-100/80 shadow-inner border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Why Choose Us Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Left Column: Text Content */}
                        <div className="space-y-10">
                            {/* Header */}
                            <div>
                                <div className="flex flex-col items-start gap-2 mb-4">
                                    <span className="text-[#0e165c] font-bold tracking-widest uppercase text-sm border-b-2 border-[#0e165c] pb-1">
                                        WHY CHOOSE US
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-2">
                                    Premium Villas And Apartments
                                </h2>
                            </div>

                            {/* Pillar 1: Authority */}
                            <div className="relative pl-6 border-l-[3px] border-amber-500">
                                <div className="absolute -left-[11.5px] top-1 w-5 h-5 bg-amber-500 rounded-full border-4 border-slate-50 shadow-sm" />
                                <h3 className="text-2xl font-black text-slate-900 mb-2">32 Years of Architectural Mastery.</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                                    Trust is built over decades. Since 1993, Surya Homes has set the gold standard as the best builders in Madurai. Our unparalleled expertise ensures your investment isn't just a house—it's a legacy of craftsmanship.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-xl text-sm font-bold text-[#0e165c]">
                                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    CREDAI Fairpro Award
                                </div>
                            </div>

                            {/* Pillar 2: Excellence */}
                            <div className="relative pl-6 border-l-[3px] border-blue-500">
                                <div className="absolute -left-[11.5px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-50 shadow-sm" />
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Engineering for Eternity.</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                                    We don't just build; we innovate. Using top-tier materials and advanced structural techniques, we create durable, stylish homes designed to stand the test of time. Quality is our signature; excellence is our standard.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-lg text-sm font-bold tracking-wide">High-Grade Materials</span>
                                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-lg text-sm font-bold tracking-wide">Advanced Techniques</span>
                                </div>
                            </div>

                            {/* Pillar 3: Lifestyle */}
                            <div className="relative pl-6 border-l-[3px] border-emerald-500">
                                <div className="absolute -left-[11.5px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-50 shadow-sm" />
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Your Private Sanctuary Awaits.</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                                    Experience the perfect blend of safety and serenity. Our gated communities in Madurai and Coimbatore offer more than luxury villas—they offer a lifestyle. Thrive in a secure, amenity-rich environment designed for your family’s peace of mind.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                        24/7 Security
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                        Amenities
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Eco-Friendly Spaces
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Masonry Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 h-full min-h-[500px]">
                            <div className="flex flex-col gap-4">
                                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600" alt="Premium Villa Night" className="rounded-[2rem] object-cover h-64 w-full shadow-lg" />
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" alt="Modern Apartment" className="rounded-[2rem] object-cover h-48 w-full shadow-lg" />
                            </div>
                            <div className="flex flex-col gap-4 mt-12">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Luxury Home Exterior" className="rounded-[2rem] object-cover h-48 w-full shadow-lg" />
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" alt="Spacious Villa" className="rounded-[2rem] object-cover h-64 w-full shadow-lg" />
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Scroll Sequence 3 Video Effect for Animation 2 */}
            <ScrollSequence folderName="sequence-3" frameCount={266} textConfig="sequence2" />

            {/* Vertical Marquee Section - AntiGravity Interaction */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-white border-y border-slate-200 shadow-inner flex justify-center items-center">

                {/* Gray Base Layer */}
                <div className="absolute top-0 w-full flex justify-center pointer-events-none md:mt-24 mt-12">
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                        className="flex flex-col w-full"
                    >
                        {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
                            <div key={`gray-${i}`} className="pb-16 md:pb-32 text-[40px] md:text-[80px] lg:text-[120px] font-black tracking-tighter text-slate-300 leading-[1] text-center px-4 w-full">
                                {text}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Highlight Gold Layer Configured with Marquee Mask */}
                <div
                    className="absolute top-0 w-full flex justify-center pointer-events-none md:mt-24 mt-12"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 35%, black 45%, black 55%, transparent 65%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 35%, black 45%, black 55%, transparent 65%)'
                    }}
                >
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                        className="flex flex-col w-full"
                    >
                        {[...marqueeTexts, ...marqueeTexts].map((text, i) => (
                            <div
                                key={`gold-${i}`}
                                className="pb-16 md:pb-32 text-[40px] md:text-[80px] lg:text-[120px] font-black tracking-tighter text-slate-900 leading-[1] text-center px-4 w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                            >
                                {text}
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            <div className="relative border-b border-slate-200 overflow-hidden">
                {/* Black to White Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-400 to-slate-50"></div>
                {/* Glass overlay to smooth the gradient */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] py-12 px-8 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 group">
                                <div className="text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform drop-shadow-sm"><Counter end={500} />+</div>
                                <div className="text-white font-bold tracking-[0.15em] uppercase text-xs drop-shadow-sm">Units property</div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] py-12 px-8 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 group">
                                <div className="text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform drop-shadow-sm"><Counter end={60} />+</div>
                                <div className="text-white font-bold tracking-[0.15em] uppercase text-xs drop-shadow-sm">Types of units</div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] py-12 px-8 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 group">
                                <div className="text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform drop-shadow-sm"><Counter end={5} />k+</div>
                                <div className="text-white font-bold tracking-[0.15em] uppercase text-xs drop-shadow-sm">Properties sold</div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Trust Badges Section */}
            <div className="bg-slate-100/80 shadow-inner border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                    <section>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50/50 rounded-[3rem] border border-slate-200 p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
                        >
                            {/* Decorative Background blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-amber-100/40 via-blue-100/40 to-red-100/40 blur-3xl rounded-full pointer-events-none"></div>

                            {/* Top Banner */}
                            <div className="bg-white border border-slate-200 py-4 px-6 rounded-2xl flex items-center justify-center gap-3 mb-16 shadow-sm relative z-10 w-fit mx-auto">
                                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight text-center">Top Builders In Madurai & Best Builders In Coimbatore</h3>
                            </div>

                            {/* Badges Row */}
                            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-16 relative z-10">

                                {/* DTCP Placeholder */}
                                <div className="w-32 h-32 md:w-40 md:h-40 relative group flex items-center justify-center mx-auto">
                                    <div className="absolute inset-0 bg-[#d51c27] rounded-full border-[6px] border-double border-white shadow-[0_0_0_6px_#d51c27] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                        <div className="text-center text-white p-2">
                                            <div className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest leading-none mb-1 opacity-90">Approved Layout</div>
                                            <div className="text-3xl md:text-4xl font-black leading-none mb-1 tracking-tighter drop-shadow-md">DTCP</div>
                                            <div className="text-[7px] md:text-[8px] uppercase font-bold tracking-[0.2em] leading-none opacity-90">Spot Registration</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Rating Placeholder */}
                                <div className="flex flex-col items-center justify-center mx-auto">
                                    <div className="flex items-center gap-[2px] mb-2 font-sans text-4xl font-bold tracking-tighter">
                                        <span className="text-[#4285F4]">G</span>
                                        <span className="text-[#EA4335]">o</span>
                                        <span className="text-[#FBBC05]">o</span>
                                        <span className="text-[#4285F4]">g</span>
                                        <span className="text-[#34A853]">l</span>
                                        <span className="text-[#EA4335]">e</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-1 text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <div className="text-sm font-bold text-slate-800">4.9 STAR</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Customer Rating</div>
                                </div>

                                {/* RERA Placeholder */}
                                <div className="w-32 h-32 md:w-40 md:h-40 relative group flex items-center justify-center mx-auto">
                                    <div className="absolute inset-0 bg-white rounded-full border-[8px] border-double border-[#9e070c] flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl overflow-hidden before:absolute before:inset-0 before:border-[2px] before:border-dashed before:border-[#9e070c]/40 before:m-2 before:rounded-full">
                                        <div className="text-center text-[#9e070c] z-10 w-full flex flex-col items-center justify-center h-full">
                                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Approved</div>
                                            <div className="bg-[#9e070c] text-white w-[110%] py-1.5 text-3xl font-black tracking-widest shadow-md border-y-2 border-white -rotate-3 overflow-hidden">
                                                RERA
                                            </div>
                                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Approved</div>
                                        </div>
                                    </div>
                                </div>

                                {/* ISO Placeholder */}
                                <div className="w-32 h-32 md:w-40 md:h-40 relative group flex items-center justify-center mx-auto">
                                    <div className="absolute inset-0 bg-white rounded-full border-4 border-[#2857a2] flex items-center justify-center shadow-lg outline outline-2 outline-offset-4 outline-[#2857a2] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                        <div className="text-center text-[#2857a2]">
                                            <div className="text-[9px] uppercase font-black tracking-widest mb-1 opacity-80">Certified</div>
                                            <div className="text-3xl font-black mb-1 tracking-tighter shadow-sm border-y-2 border-[#2857a2]">ISO 9001</div>
                                            <div className="text-[9px] uppercase font-black tracking-widest opacity-80">Certified</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Banner */}
                            <div className="bg-white border border-slate-200 py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-sm relative z-10 w-fit mx-auto">
                                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-2H2v-4h4.257a6 6 0 1111.743.257zM15.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg>
                                <h3 className="text-base md:text-lg font-bold text-slate-800 tracking-tight text-center">Your Trusted Builders In Madurai And Coimbatore For Dream Villas And Apartments</h3>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </div>

            {/* Popular Properties Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                    <section>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Properties</h2>
                                <p className="text-slate-500 max-w-xl text-lg">Explore boundless living possibilities that transcend traditional boundaries. Discover homes that resonate with your unique aspirations.</p>
                            </div>
                            <button
                                onClick={() => setShowAllProperties(!showAllProperties)}
                                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-amber-500/20"
                            >
                                {showAllProperties ? "Show Less" : "See All"}
                                <svg className={`w-4 h-4 transition-transform ${showAllProperties ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllProperties ? "M5 15l7-7 7 7" : "M14 5l7 7m0 0l-7 7m7-7H3"} />
                                </svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {displayedProjects.map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: Math.min(idx, 3) * 0.1 }}
                                    className="bg-white border border-slate-100 rounded-[1.5rem] p-4 flex flex-col group hover:border-amber-500/50 transition-all cursor-pointer shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                                        <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                            {project.price}
                                        </div>
                                        <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-1">{project.location}</p>

                                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mt-auto pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                            {project.beds} Beds
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                            {project.sqft}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Special CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-[#0e165c] rounded-[1.5rem] p-8 flex flex-col justify-center relative overflow-hidden group hover:brightness-110 transition-all cursor-pointer shadow-[0_20px_40px_-15px_rgba(14,22,92,0.4)] hover:-translate-y-1"
                            >
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white text-[#0e165c] rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all shadow-lg">
                                    <svg className="w-6 h-6 translate-x-[1px] -translate-y-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-3">Haven't found<br />the right one?</h3>
                                <p className="text-base text-blue-200 mb-8">Discover homes that resonate with your unique aspirations.</p>

                                <div className="flex gap-4 opacity-50">
                                    <div className="w-14 h-14 border border-white/20 rounded-2xl flex items-center justify-center"><svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
                                    <div className="w-14 h-14 border border-white/20 rounded-2xl flex items-center justify-center"><svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-slate-100/80 shadow-inner border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                    <section>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Words from Our Happy<br />& Satisfied Clients</h2>
                            <div className="flex gap-3">
                                <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors bg-white shadow-sm"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                                <button className="w-12 h-12 rounded-full bg-[#0e165c] flex items-center justify-center text-white hover:bg-blue-900 transition-colors shadow-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: item * 0.1 }}
                                    className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow"
                                >
                                    <div className="flex items-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 mb-8 leading-relaxed text-lg italic">
                                        "Living in a Surya home has been a dream. The attention to detail, modern amenities, and the serene environment create a perfect balance. Our family feels incredibly safe and truly happy here."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img src={`https://i.pravatar.cc/150?img=${item * 10}`} alt="User profile" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                                        <div>
                                            <h4 className="text-slate-900 font-bold text-lg">Michael Thompson</h4>
                                            <p className="text-sm text-slate-500 font-medium">IT Professional</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                    <section>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#0e165c] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative background shapes */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                            <div className="max-w-xl relative z-10">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">Say hello to brighter<br />days together.</h2>
                                <p className="text-blue-200 text-lg leading-relaxed">Connect with our experts and let us help you find the home you've always dreamed of. Fill out the quick form and we'll be in touch shortly.</p>
                            </div>

                            <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Get a Callback</h3>
                                <div className="space-y-4 mb-6">
                                    <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#0e165c] focus:ring-1 focus:ring-[#0e165c] transition-all" />
                                    <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#0e165c] focus:ring-1 focus:ring-[#0e165c] transition-all" />
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-[#0e165c] focus:ring-1 focus:ring-[#0e165c] transition-all" />
                                </div>
                                <button className="w-full bg-amber-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30 text-lg">
                                    Request Callback
                                </button>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </div>

            {/* Legacy SEO Block */}
            <div className="bg-slate-900 pb-12 pt-12">
                <div className="text-center text-xs text-slate-400 max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity px-6">
                    Builders in madurai | Best Builders in madurai | top builders in madurai |
                    Best apartments in Madurai, luxury apartments in Madurai. Discover premium 2BHK and 3BHK apartments built by the best builders in Madurai. |
                    3 bhk apartments in madurai | gated community apartments in Madurai | 2 bhk flats in madurai
                </div>
            </div>
        </div>
    );
};

export default Sections;
