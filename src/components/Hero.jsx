import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-[85vh] w-full overflow-hidden">
            {/* Desktop Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover top-0 left-0 z-[-1] hidden sm:block"
            >
                <source src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/cyberpunkBackground1.mp4?updatedAt=1746878888144" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mobile Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover top-0 left-0 z-[-1] block sm:hidden"
            >
                <source src="/mobileViw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Bottom shadow overlay */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent pointer-events-none z-[0]" />

            <div className="relative z-10 h-full">
                <NavBar />
                <div className="max-w-[90%] mx-auto 2xl:max-w-[1400px] flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block">
                        <div className="flex gap-x-4 mb-10">
                            <div className="flex">
                                <img className="h-[50px]" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/quote-left-0fba71e6.png?updatedAt=1746878887570" alt="left" />
                                <div className="text-center uppercase">
                                    <p className="font-blenderbold text-[20px] font-[700] leading-[24px] ">"Better than ever"</p>
                                    <p className="font-blender text-[18px] leading-[26px] ">Push Square</p>
                                </div>
                                <img className="h-[50px]" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/quote-right-ed9471ca.png?updatedAt=1746878886799" alt="right" />
                            </div>
                            <div className="flex">
                                <img className="h-[50px]" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/quote-left-0fba71e6.png?updatedAt=1746878887570" alt="left" />
                                <div className="text-center uppercase">
                                    <p className="font-blenderbold text-[20px] font-[700] leading-[24px] ">"A stellar RPG"</p>
                                    <p className="font-blender text-[18px] leading-[26px] ">GameSpot</p>
                                </div>
                                <img className="h-[50px]" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/quote-right-ed9471ca.png?updatedAt=1746878886799" alt="right" />
                            </div>
                            <div className="flex">
                                <img className="h-[50px]" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/quote-left-0fba71e6.png?updatedAt=1746878887570" alt="left" />
                                <div className="text-center uppercase">
                                    <p className="font-blenderbold text-[20px] font-[700] leading-[24px] ">"Hard reboot"</p>
                                    <p className="font-blender text-[18px] leading-[26px] ">Eurogamer</p>
                                </div>
                                <img className="h-[50px]" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/HeroSection/quote-right-ed9471ca.png?updatedAt=1746878886799" alt="right" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="font-Jersey lg:text-center font-[400] lg:pl-24 text-[40px] sm:text-[58px] leading-[40px] sm:leading-[61px] text-white sm:text-black max-w-4xl">
                            <h1 className="mb-2">Get the Ultimate</h1>
                            <h1 className="mb-2">Cyberpunk 2077</h1>
                            <h1>Experience</h1>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto lg:pl-16">
                        <Link to="/learn-more">
                            <button className="cybr-btn w-full sm:w-auto px-8 py-3">
                                LEARN MORE<span aria-hidden>_</span>
                                <span aria-hidden className="cybr-btn__glitch"> MORE</span>
                                <span aria-hidden className="cybr-btn__tag">R25</span>
                            </button>
                        </Link>
                        <a href="https://www.youtube.com/watch?v=Ugb80d5lxEM" target="_blank">
                            <button className="relative w-full sm:w-[232px] h-[48px] bg-no-repeat bg-cover bg-center text-black font-bold text-base tracking-wide flex items-center justify-center hover:opacity-90 transition-opacity"
                                style={{
                                    backgroundImage: "url('https://ik.imagekit.io/c2zxrxqp6/CyberPunk/GameSection/btnImg.svg?updatedAt=1746880810997')"
                                }}
                            >
                                WATCH TRAILER
                            </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
