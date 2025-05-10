import React, { useState, useEffect } from 'react'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="2xl:container mx-auto">
                <div className='w-[90%] mx-auto sticky '>
                    <div className="flex justify-between items-center">
                        <div className="m-4">
                            <img src="/image.png" alt="cyberLogo" className="h-12 md:h-16" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex font-blender items-center justify-center rounded-sm">
                            <ul className="text-[20px] leading-[24px] flex items-center pl-6 bg-[#4F4E04] clip-five-side rounded-sm">
                                <li className="bg-[#4F4E04] text-white px-8 h-[38px] flex items-center hover:bg-[#FFF733]/80 hover:text-black transition-colors duration-300 font-blender">GAMES</li>
                                <li className="bg-[#4F4E04] text-white px-8 h-[38px] flex items-center hover:bg-[#FFF733]/80 hover:text-black  transition-colors duration-300 font-blender">SHOWS</li>
                                <li className="bg-[#4F4E04] text-white px-8 h-[38px] flex items-center hover:bg-[#FFF733]/80 hover:text-black  transition-colors duration-300 font-blender">COMMUNITY</li>
                                <li className="bg-[#4F4E04] text-white px-8 h-[38px] flex items-center hover:bg-[#FFF733]/80 hover:text-black  transition-colors duration-300 font-blender">MORE</li>
                                <button className="bg-[#FFF733] text-black px-8 h-[38px] flex items-center hover:bg-[#FFF733]/80 transition-colors duration-300 font-blender" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 85% 100%, 0 100%)' }}>BUY NOW</button>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Menu */}

                    <div className={`lg:hidden ${isMenuOpen ? 'block animate-fadeIn' : 'hidden'} fixed inset-0 h-screen w-screen overflow-hidden`}
                        style={{
                            backgroundImage: "url('src/assets/image.png')",
                            backgroundRepeat: 'repeat',
                        }}
                    >
                        {/* Overlay for dark effect and blur */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-none z-0" />
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 z-20 text-[#FFF733] bg-black/60 rounded-full p-2 shadow-lg hover:bg-[#FFF733] hover:text-black transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex flex-col gap-2 relative z-10 h-full">
                            <div className='flex items-center justify-center mt-4'>
                                <img className='h-[75px]' src="src/assets/cyberpunk.png" alt="" />
                            </div>
                            <li className="text-white text-2xl px-8 py-4 font-blender rounded-lg border border-transparent hover:border-[#00f0ff] hover:shadow-[0_0_10px_2px_#00f0ff] hover:bg-[#FFF733]/20 hover:text-[#00f0ff] transition-all duration-300 cursor-pointer">GAMES</li>
                            <li className="text-white text-2xl px-8 py-4 font-blender rounded-lg border border-transparent hover:border-[#00f0ff] hover:shadow-[0_0_10px_2px_#00f0ff] hover:bg-[#FFF733]/20 hover:text-[#00f0ff] transition-all duration-300 cursor-pointer">SHOWS</li>
                            <li className="text-white text-2xl px-8 py-4 font-blender rounded-lg border border-transparent hover:border-[#00f0ff] hover:shadow-[0_0_10px_2px_#00f0ff] hover:bg-[#FFF733]/20 hover:text-[#00f0ff] transition-all duration-300 cursor-pointer">COMMUNITY</li>
                            <li className="text-white text-2xl px-8 py-4 font-blender rounded-lg border border-transparent hover:border-[#00f0ff] hover:shadow-[0_0_10px_2px_#00f0ff] hover:bg-[#FFF733]/20 hover:text-[#00f0ff] transition-all duration-300 cursor-pointer">MORE</li>
                            <div className='flex items-end justify-center mt-14'>
                                <button className="relative w-[232px] h-[48px] bg-no-repeat bg-cover bg-center text-black font-bold text-base tracking-wide flex items-center justify-center"
                                    style={{
                                        backgroundImage: "url('/src/assets/btnImg.svg')"
                                    }}
                                >
                                    WATCH TRAILER
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar