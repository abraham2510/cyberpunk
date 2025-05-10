import React from 'react'

export const GameSection = () => {
    return (
        <>
            <div className='bg-[#FFF733]'>
                <div className='2xl:container mx-auto '>
                    <div className='w-[90%] mx-auto'>
                        <div className='text-center space-y-4 pt-20 pb-12'>
                            <h1 className='text-black font-Jersey text-[44px] leading-[44px] font-[400]'>Welcome to the dark future</h1>
                            <p className='font-blender text-[22px] leading-[26px] max-w-3xl mx-auto'>Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty to the award-winning anime series Cyberpunk: Edgerunners — there are countless stories to discover in the deadly megalopolis of Night City.</p>
                        </div>
                        <div className='pb-20'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-0'>
                                {/* card 1 */}
                                <div className="w-full md:w-full h-[500px] md:h-[400px] border-[4px] md:border-[8px] border-black bg-[url('/src/assets/product1.jpg')] bg-cover bg-center bg-no-repeat">
                                    <div className="relative h-full flex flex-col justify-end">
                                        <div className="p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className='flex justify-center mb-2 md:mb-4'>
                                                <img
                                                    src="/src/assets/cyberpunk.png"
                                                    alt="cyberpunk"
                                                    className='h-14 md:h-18 max-w-[80%]'
                                                />
                                            </div>
                                            <div className='space-y-3 md:space-y-4'>
                                                <div className='flex justify-center gap-1'>
                                                    <img className='h-[18px] md:h-[20px]' src="/src/assets/platform-xboxsx-cf2259c6.svg" alt="xboxsx" />
                                                    <img className='h-[18px] md:h-[20px]' src="/src/assets/platform-ps5-38dc3047.svg" alt="ps5" />
                                                    <img className='h-[18px] md:h-[20px]' src="/src/assets/platform-pc-fb384eb0.svg" alt="pc" />
                                                </div>
                                                <div className='flex justify-center mt-4 md:mt-6'>
                                                    <a href="#" className="relative group block w-full max-w-[232px]">
                                                        <img
                                                            src="/src/assets/btnBlue.svg"
                                                            alt="Button"
                                                            className="w-full h-[44px] md:h-[48px]"
                                                        />
                                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono text-sm">
                                                            LEARN MORE
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card 2 */}
                                <div className="w-full md:w-full h-[500px] md:h-[400px] border-[4px] md:border-[8px] border-black bg-[url('/src/assets/product2.jpg')] bg-cover bg-center bg-no-repeat">
                                    <div className="relative h-full flex flex-col justify-end">
                                        <div className="p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className='flex justify-center mb-2 md:mb-4'>
                                                <img
                                                    src="src/assets/logo-phantom-liberty-en@1x-735bd500 (1).png"
                                                    alt="cyberpunk"
                                                    className='h-14 md:h-18 max-w-[80%]'
                                                />
                                            </div>
                                            <div className='space-y-3 md:space-y-4'>
                                                <div className='flex justify-center gap-1'>
                                                    <img className='h-[18px] md:h-[20px]' src="/src/assets/platform-xboxsx-cf2259c6.svg" alt="xboxsx" />
                                                    <img className='h-[18px] md:h-[20px]' src="/src/assets/platform-ps5-38dc3047.svg" alt="ps5" />
                                                    <img className='h-[18px] md:h-[20px]' src="/src/assets/platform-pc-fb384eb0.svg" alt="pc" />
                                                </div>
                                                <div className='flex justify-center mt-4 md:mt-6'>
                                                    <a href="#" className="relative group block w-full max-w-[232px]">
                                                        <img
                                                            src="/src/assets/btnBlue.svg"
                                                            alt="Button"
                                                            className="w-full h-[44px] md:h-[48px]"
                                                        />
                                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono text-sm">
                                                            LEARN MORE
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card 3 */}
                                <div className="w-full md:w-full h-[500px] md:h-[400px] border-[4px] md:border-[8px] border-black bg-[url('/src/assets/product3.jpg')] bg-cover bg-center bg-no-repeat">
                                    <div className="relative h-full flex flex-col justify-end">
                                        <div className="p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className='flex justify-center mb-2 md:mb-4'>
                                                <img
                                                    src="src/assets/logo-edgerunners@1x-dfdd9976.png"
                                                    alt="cyberpunk"
                                                    className='h-14 md:h-18 max-w-[80%]'
                                                />
                                            </div>
                                            <div className='space-y-3 md:space-y-4'>
                                                <div className='flex justify-center gap-1'>
                                                    <img className='h-[18px] md:h-[20px]' src="src/assets/logo-netflix-77b797a3.svg" alt="netflix" />
                                                </div>
                                                <div className='flex justify-center mt-4 md:mt-6'>
                                                    <a href="#" className="relative group block w-full max-w-[232px]">
                                                        <img
                                                            src="/src/assets/btnBlue.svg"
                                                            alt="Button"
                                                            className="w-full h-[44px] md:h-[48px]"
                                                        />
                                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono text-sm">
                                                            LEARN MORE
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card 4 */}
                                <div className="w-full md:w-full h-[500px] md:h-[400px] border-[4px] md:border-[8px] border-black bg-[url('/src/assets/product4.jpg')] bg-cover bg-center bg-no-repeat">
                                    <div className="relative h-full flex flex-col justify-end">
                                        <div className="p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className='flex justify-center mb-2 md:mb-4'>
                                                <img
                                                    src="src/assets/logo-cdr-gear-02b3d40a.svg"
                                                    alt="cyberpunk"
                                                    className='h-14 md:h-18 max-w-[80%]'
                                                />
                                            </div>
                                            <div className='space-y-3 md:space-y-4'>
                                                <div className='flex justify-center mt-4 md:mt-12'>
                                                    <a href="#" className="relative group block w-full max-w-[232px]">
                                                        <img
                                                            src="/src/assets/btnBlue.svg"
                                                            alt="Button"
                                                            className="w-full h-[44px] md:h-[48px]"
                                                        />
                                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-mono text-sm">
                                                            LEARN MORE
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t border-black mt-10 w-full" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
