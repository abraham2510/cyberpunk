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
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/youtube-cb066cae.svg?updatedAt=1746880864304" alt="youtube" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-facebook hover:opacity-80 transition-opacity" href="https://www.facebook.com/CyberpunkGame" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/facebook-607a7626.svg?updatedAt=1746880868406" alt="facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-twitter hover:opacity-80 transition-opacity" href="http://twitter.com/cyberpunkgame" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/twitter-964d7e53.svg?updatedAt=1746880864442" alt="twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-forums hover:opacity-80 transition-opacity" href="https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/forums-ea984cf4.svg?updatedAt=1746880868960" alt="forums" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-discord hover:opacity-80 transition-opacity" href="https://discord.gg/cyberpunkgame" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/discord-25f7b34a.svg?updatedAt=1746880868846" alt="discord" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-instagram hover:opacity-80 transition-opacity" href="https://www.instagram.com/cyberpunkgame/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/instagram-d70b2cd7.svg?updatedAt=1746880865158" alt="instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-tumblr hover:opacity-80 transition-opacity" href="https://cyberpunkgame.tumblr.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/tumblr-0afcfa1b.svg?updatedAt=1746880864537" alt="tumblr" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a className="social-twitch hover:opacity-80 transition-opacity" href="https://www.twitch.tv/cdprojektred" target="_blank" rel="noopener noreferrer">
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/twitch-e28d5215.svg?updatedAt=1746880864518" alt="twitch" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                            </div>
                        </div>

                        {/* Partner Logos Section */}
                        <div className='pb-4'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 max-w-3xl mx-auto'>
                                    <div className='flex flex-col sm:flex-row items-center gap-8 sm:gap-12'>
                                        <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/nvidia.svg?updatedAt=1746880864745" alt="nvidia" className="w-28 sm:w-32" />
                                        <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/alienware.svg?updatedAt=1746880869192" alt="alienware" className="w-28 sm:w-32" />
                                    </div>
                                    <div className='flex flex-col sm:flex-row items-center gap-8 sm:gap-12'>
                                        <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/amd.svg?updatedAt=1746880869054" alt="amd" className="w-28 sm:w-32" />
                                        <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/rating-esrb@2x-a80e5005.png?updatedAt=1746880864523" alt="rating" className="h-16 sm:h-20" />
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
                                <img className='h-[50px] sm:h-[60px]' src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/CDProjektRed-White.svg?updatedAt=1746880868554" alt="cdprojektred" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-blender text-[10px] leading-[15px] text-[#cbcbcb] text-center sm:text-start'>© 2025 CD PROJEKT S.A. All rights reserved. CD PROJEKT, the CD PROJEKT logo, Cyberpunk, Cyberpunk 2077 and the Cyberpunk 2077 logo are trademarks and/or registered trademarks of CD PROJEKT S.A. in the US and/or other countries.</p>
                            </div>
                        </div>

                        {/* EndOfFooter */}
                        <div className='border-gray-800 py-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-[60%] mx-auto'>
                                <div className='flex flex-col items-center justify-center gap-3 text-white'>
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/witcher-dbdb7666.png?updatedAt=1746880864309" alt="witcher" className="h-8 sm:h-10" />
                                    <a href="https://www.thewitcher.com/in/en/" className="text-sm hover:text-[#00f0ff] transition-colors">thewitcher.com</a>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-3 text-white'>
                                    <img src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Footer/gwent-f7fcd4e6.png?updatedAt=1746880869276" alt="gwent" className="h-8 sm:h-10" />
                                    <a href="https://www.playgwent.com/en/" className="text-sm hover:text-[#00f0ff] transition-colors">playgwent.com</a>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-3 text-white'>
                                    <img src="https://www.cyberpunk.net/build/images/footer/gear-logo/logo-gear_horizontal_white-2e8243c2.svg" alt="gear" className="h-8 sm:h-10" />
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