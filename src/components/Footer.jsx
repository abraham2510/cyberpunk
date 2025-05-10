import React from 'react'

const Footer = () => {
    return (
        <>
            <div className=' bg-black'>
                <div className='2xl:container mx-auto'>
                    <div className='w-[90%] mx-auto'>
                        {/* Social Media Section */}
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 py-6'>
                            <span className='text-slate-400 uppercase font-blenderbold text-[16px] sm:text-[18px] leading-[21px] mb-4 sm:mb-0'>Find us on</span>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <a className="social-youtube hover:opacity-80 transition-opacity" href="https://www.youtube.com/user/CyberPunkGame" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/youtube-cb066cae.svg" alt="youtube" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-facebook hover:opacity-80 transition-opacity" href="https://www.facebook.com/CyberpunkGame" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/facebook-607a7626.svg" alt="facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-twitter hover:opacity-80 transition-opacity" href="http://twitter.com/cyberpunkgame" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/twitter-964d7e53.svg" alt="twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-forums hover:opacity-80 transition-opacity" href="https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/forums-ea984cf4.svg" alt="forums" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-discord hover:opacity-80 transition-opacity" href="https://discord.gg/cyberpunkgame" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/discord-25f7b34a.svg" alt="discord" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-instagram hover:opacity-80 transition-opacity" href="https://www.instagram.com/cyberpunkgame/" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/instagram-d70b2cd7.svg" alt="instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-tumblr hover:opacity-80 transition-opacity" href="https://cyberpunkgame.tumblr.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/tumblr-0afcfa1b.svg" alt="tumblr" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-twitch hover:opacity-80 transition-opacity" href="https://www.twitch.tv/cdprojektred" target="_blank" rel="noopener noreferrer">
                                    <img src="src/assets/footericons/twitch-e28d5215.svg" alt="twitch" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                            </div>
                        </div>

                        {/* Partner Logos Section */}
                        <div className='pb-4'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 max-w-3xl mx-auto'>
                                    <div className='flex flex-col sm:flex-row items-center gap-8 sm:gap-12'>
                                        <img src="src/assets/footericons/nvidia.svg" alt="nvidia" className="w-28 sm:w-32" />
                                        <img src="src/assets/footericons/alienware.svg" alt="alienware" className="w-28 sm:w-32" />
                                    </div>
                                    <div className='flex flex-col sm:flex-row items-center gap-8 sm:gap-12'>
                                        <img src="src/assets/footericons/amd.svg" alt="amd" className="w-28 sm:w-32" />
                                        <img src="src/assets/footericons/rating-esrb@2x-a80e5005.png" alt="rating" className="h-16 sm:h-20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Links Section */}
                        <div className='border-t border-gray-800 py-4'>
                            <div className='max-w-[85%] mx-auto'>
                                <ul className='text-[#00f0ff] font-blenderbold font-[300] text-[12px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-4'>
                                    <li className='flex items-center justify-center sm:justify-center'>
                                        <a href="" className='hover:text-white transition-colors whitespace-nowrap'>Terms of Use & Privacy Policy</a>
                                    </li>
                                    <li className='flex items-center justify-center sm:justify-center'>
                                        <a href="" className='hover:text-white transition-colors whitespace-nowrap'>Careers</a>
                                    </li>
                                    <li className='flex items-center justify-center sm:justify-center'>
                                        <a href="" className='hover:text-white transition-colors whitespace-nowrap'>User agreement</a>
                                    </li>
                                    <li className='flex items-center justify-center sm:justify-center'>
                                        <a href="" className='hover:text-white transition-colors whitespace-nowrap'>Fan Content Guidelines</a>
                                    </li>
                                    <li className='flex items-center justify-center sm:justify-center'>
                                        <a href="" className='hover:text-white transition-colors whitespace-nowrap'>Cookie Declaration</a>
                                    </li>
                                    <li className='flex items-center justify-center sm:justify-center'>
                                        <a href="" className='hover:text-white transition-colors whitespace-nowrap'>REDmod</a>
                                    </li>

                                </ul>
                                <p className='border-t border-gray-800 w-full mt-4'></p>
                            </div>
                        </div>

                        {/* cd projectRed */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-[60%] mx-auto'>
                            <div className='flex items-center justify-center sm:justify-start'>
                                <img className='h-[50px] sm:h-[60px]' src="src/assets/footericons/CDProjektRed-White.svg" alt="cdprojektred" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-blender text-[10px] leading-[15px] text-[#cbcbcb] text-center sm:text-start'>© 2025 CD PROJEKT S.A. All rights reserved. CD PROJEKT, the CD PROJEKT logo, Cyberpunk, Cyberpunk 2077 and the Cyberpunk 2077 logo are trademarks and/or registered trademarks of CD PROJEKT S.A. in the US and/or other countries.</p>
                            </div>
                        </div>

                        {/* EndOfFooter */}
                        <div className='border-gray-800 py-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-[60%] mx-auto'>
                                <div className='flex flex-col items-center justify-center gap-3 text-white'>
                                    <img src="src/assets/footericons/witcher-dbdb7666.png" alt="witcher" className="h-8 sm:h-10" />
                                    <a href="https://www.thewitcher.com/in/en/" className="text-sm hover:text-[#00f0ff] transition-colors">thewitcher.com</a>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-3 text-white'>
                                    <img src="src/assets/footericons/gwent-f7fcd4e6.png" alt="gwent" className="h-8 sm:h-10" />
                                    <a href="https://www.playgwent.com/en/" className="text-sm hover:text-[#00f0ff] transition-colors">playgwent.com</a>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-3 text-white'>
                                    <img src="src/assets/logo-cdr-gear-02b3d40a.svg" alt="gear" className="h-8 sm:h-10" />
                                    <a href="https://gear.cdprojektred.com" className="text-sm hover:text-[#00f0ff] transition-colors">gear.cdprojektred.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer