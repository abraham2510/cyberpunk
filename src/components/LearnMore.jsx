import NavBar from './NavBar'
import { useEffect, useState, useRef } from 'react'

const LearnMore = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const heroRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate parallax effects based on element positions
    const getParallaxEffect = (elementRef, intensity = 0.5) => {
        if (!elementRef.current) return 0;
        const rect = elementRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        return (elementCenter - viewportCenter) * intensity * -0.1;
    };

    const videoParallax = scrollPosition * 0.5;
    const contentParallax = scrollPosition * 0.3;
    const featuresParallax = getParallaxEffect(featuresRef, 0.4);

    // Calculate opacity based on scroll position relative to hero section
    const heroOpacity = () => {
        if (!heroRef.current) return 1;
        const heroHeight = heroRef.current.offsetHeight;
        return Math.max(0, 1 - (scrollPosition / heroHeight) * 1.5);
    };

    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            <NavBar />

            {/* Hero Section with Video Background */}
            <div
                ref={heroRef}
                className="relative h-screen overflow-hidden"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover md:h-[120%]"
                    style={{
                        transform: `translateY(${videoParallax}px)`,
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    <source src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/Videos/Cyberpunk%202077_%20Ultimate%20Edition%20_%20City%20of%20Dreams.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay with gradient */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
                    style={{
                        opacity: heroOpacity(),
                        transition: 'opacity 0.5s ease-out'
                    }}
                />

                {/* Hero Content */}
                <div
                    className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
                    style={{
                        transform: `translateY(${contentParallax * 0.7}px)`,
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    <div
                        className="max-w-[90%] mx-auto 2xl:max-w-[1400px] text-center"
                        style={{
                            transform: `scale(${Math.max(0.8, 1 - (scrollPosition * 0.0003))})`,
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                            opacity: heroOpacity()
                        }}
                    >
                        <h1 className="font-Jersey text-[40px] sm:text-[68px] md:text-[80px] leading-[40px] sm:leading-[61px] md:leading-[72px] text-white mb-6 tracking-tight">
                            Welcome to <span className="text-[#FFF733]">Night City</span>
                        </h1>
                        <p className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">
                            A megalopolis obsessed with power, glamour and body modification.
                            Where the line between humanity and technology blurs.
                        </p>
                        <button className="bg-[#FFF733] hover:bg-[#00f0ff] text-black font-bold py-3 px-8 rounded-sm transition-all duration-300 transform hover:scale-105">
                            Join the Future
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                    style={{
                        opacity: heroOpacity(),
                        transition: 'opacity 0.5s ease-out'
                    }}
                >
                    <div className="animate-bounce w-6 h-10 border-2 border-[#FFF733] rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-[#FFF733] rounded-full mt-2"></div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div
                ref={featuresRef}
                className="relative z-20 bg-gradient-to-b from-black via-black to-[#0a0a0a] py-32"
            >
                <div className="min-h-screen flex items-center justify-center font-blender">
                    <div
                        className="max-w-[90%] mx-auto 2xl:max-w-[1400px]"
                        style={{
                            transform: `translateY(${featuresParallax}px)`,
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        <h2 className="font-Jersey text-[32px] sm:text-[48px] md:text-[60px] text-[#FFF733] mb-16 text-center">
                            The <span className="text-[#00f0ff]">Future</span> is Now
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    number: "01",
                                    title: "Open World",
                                    description: "Explore the vast, neon-lit streets of Night City, from the corporate towers of City Center to the dangerous alleys of Pacifica.",
                                    color: "#00f0ff"
                                },
                                {
                                    number: "02",
                                    title: "Character Customization",
                                    description: "Create your own cyberpunk legend with extensive character customization, from appearance to cyberware implants.",
                                    color: "#FFF733"
                                },
                                {
                                    number: "03",
                                    title: "Dynamic Combat",
                                    description: "Engage in fast-paced combat with a variety of weapons, cyberware abilities, and tactical options.",
                                    color: "#FF2A6D"
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-black/70 to-black/30 border border-[#FFF733]/10 p-8 rounded-sm hover:border-[#FFF733]/50 transition-all duration-500 h-full transform hover:-translate-y-2 group"
                                    style={{
                                        boxShadow: `0 0 15px ${feature.color}20`,
                                        backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    <div
                                        className={`text-[${feature.color}] text-4xl mb-4 font-mono group-hover:text-[${feature.color}] transition-colors duration-300`}
                                        style={{ color: feature.color }}
                                    >
                                        {feature.number}
                                    </div>
                                    <h3
                                        className="text-white text-xl md:text-2xl mb-4 font-blender group-hover:text-[#FFF733] transition-colors duration-300"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed md:text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional content section */}
            <div className="relative z-10 bg-black py-32 px-4 sm:px-6 lg:px-8 font-blender">
                <div className="max-w-[90%] mx-auto 2xl:max-w-[1400px] text-center">
                    <h2 className="font-Jersey text-[32px] sm:text-[48px] md:text-[60px] text-[#FFF733] mb-16">
                        Become <span className="text-[#FF2A6D]">Legendary</span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative overflow-hidden rounded-sm border border-[#FFF733]/20 group">
                            <img
                                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNrNTkxZzdvNWs4MTBmeGRpeGVkNm9sY3lub2Z6dXF4b25pYjZvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qWi6NKfkrt9TgXvIfg/giphy.gif"
                                alt="Cyberpunk Character"
                                className="w-max h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl md:text-3xl font-Jersey">
                                    Craft Your <span className="text-[#00f0ff]">Identity</span>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-white/80 text-lg md:text-xl mb-8 text-left">
                                In Night City, you're not just another face in the crowd. Your choices, your style, and your augmentations define who you become in this sprawling metropolis.
                            </p>
                            <ul className="space-y-4 text-left">
                                {[
                                    "Choose from multiple lifepaths with unique starting points",
                                    "Over 100 cyberware modifications to enhance your abilities",
                                    "Customize your appearance with futuristic fashion and body mods",
                                    "Develop relationships that shape your journey through Night City"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-[#FFF733] mr-3">▹</span>
                                        <span className="text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative z-10 bg-gradient-to-b from-black to-[#0a0a0a] py-32 px-4 sm:px-6 lg:px-8 overflow-hidden font-blender">
                <div className="max-w-[90%] mx-auto 2xl:max-w-[1400px] text-center relative">
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#FF2A6D] rounded-full filter blur-[100px] opacity-20"></div>
                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#00f0ff] rounded-full filter blur-[100px] opacity-20"></div>

                    <h2 className="font-Jersey text-[32px] sm:text-[48px] md:text-[60px] text-white mb-8">
                        Ready to <span className="text-[#FFF733]">Dive In</span>?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                        The streets of Night City are waiting. Will you become a legend or just another casualty of the urban jungle?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#FFF733] hover:bg-[#00f0ff] text-black font-bold py-4 px-12 rounded-sm transition-all duration-300 transform hover:scale-105">
                            Pre-Order Now
                        </button>
                        <button className="bg-transparent border-2 border-[#FFF733] hover:border-[#00f0ff] text-white font-bold py-4 px-12 rounded-sm transition-all duration-300 transform hover:scale-105">
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore