const News = () => {
    return (
        <>
            <div className='max-w-[90%] mx-auto 2xl:max-w-[1400px]'>
                <div className='pt-4 pb-16 px-4 sm:px-6 lg:px-8'>
                    <hr className="border-t border-white/20 mb-8" />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {/* Main featured news */}
                        <div className='group'>
                            <a className='flex justify-between items-center mb-3 hover:text-[#00f0ff] transition-colors duration-300 max-w-full' href="">
                                <span className="text-[14px] text-[#00f0ff] font-mono truncate">/// .NEWS.MODULE_HIGHLIGHT</span>
                                <span className="text-[14px] text-slate-300 ml-4 font-mono shrink-0">02.04.2025</span>
                            </a>
                            <a href="" className='block group-hover:opacity-90 transition-opacity duration-300'>
                                <div className="flex items-center gap-2 border-[6px] border-[#00f0ff] h-[300px] w-full max-w-[600px] bg-[url('https://cdn-s.cdprojektred.com/news/b3b3e8832adcf11c868a9225c3cb80f9_q90_1280x720.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="font-Jersey font-[400] text-cyan-300 text-[42px] uppercase px-6 pt-8 relative z-10">
                                        <h1 className="leading-none m-0 hidden md:block">Cyberpunk 2077:</h1>
                                        <h1 className="leading-none m-0 hidden md:block">Ultimate Edition</h1>
                                        <h1 className="leading-none m-0 hidden md:block">Coming Launch Day to</h1>
                                        <h1 className="leading-none m-0 hidden md:block">Nintendo Switch 2!</h1>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Secondary news grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            {[
                                {
                                    title: "Patch 2.21",
                                    image: "https://cdn-s.cdprojektred.com/news/a43e347b86f918c3a8bd8900cf8c62237a9f5672_q90_592x334.jpeg"
                                },
                                {
                                    title: "Take Your Shot in Photo",
                                    image: "https://cdn-s.cdprojektred.com/news/062f265029772cb5632c5764c64340b17d7548ac_q90_592x334.png"
                                },
                                {
                                    title: "Update 2.2 is live!",
                                    image: "https://cdn-s.cdprojektred.com/news/cbac67a33538d266c7c458aa9fa98385209006a2_q90_592x334.jpeg"
                                },
                                {
                                    title: "REDstreams — Update 2.2 i..",
                                    image: "https://cdn-s.cdprojektred.com/news/18463714c476811689795a07f3b0599bfd6a7207_q90_592x334.png"
                                }
                            ].map((news, index) => (
                                <div key={index} className='group'>
                                    <a className='flex items-end justify-end mb-2' href="">
                                        <span className="text-[10px] text-slate-300 px-4 font-mono">_NEWS</span>
                                    </a>
                                    <a href="" className='block group-hover:opacity-90 transition-opacity duration-300'>
                                        <div className='relative overflow-hidden'>
                                            <img
                                                className='h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                                src={news.image}
                                                alt={news.title}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                        <h1 className='font-blenderbold text-[14px] leading-[24px] text-white mt-3 group-hover:text-[#00f0ff] transition-colors duration-300'>
                                            {news.title}
                                        </h1>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* More News Button */}
                    <div className='flex justify-center mt-12'>
                        <a href="" className='group'>
                            <button className="relative group-hover:opacity-90 transition-opacity duration-300">
                                <img src="/src/assets/btnBlue.svg" alt="Button" className="w-[232px] h-[48px]" />
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono text-sm group-hover:text-[#00f0ff] transition-colors duration-300">
                                    MORE NEWS
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex justify-end items-end mt-10 px-4 sm:px-6 lg:px-8'>
                    <img src="/src/assets/razorpattern.svg" alt="razorpattern" />
                </div>
            </div>
        </>
    )
}

export default News