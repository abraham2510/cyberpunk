import React, { useState, useEffect, useRef } from "react";
import BackgroundVideo from "./BackgroundVideo";

const ParallaxVideo = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [videoDuration, setVideoDuration] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollDirection = scrollY > lastScrollPosition ? 1 : -1;
            setLastScrollPosition(scrollY);
            setScrollPosition(scrollY);

            if (videoRef.current && videoDuration > 0) {
                const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
                const newTime = scrollProgress * videoDuration;
                
                // Update video time and playback rate based on scroll direction
                videoRef.current.currentTime = newTime;
                videoRef.current.playbackRate = Math.abs(scrollDirection);
                
                if (scrollDirection > 0) {
                    // Scrolling down - play forward
                    videoRef.current.play();
                    setIsPlaying(true);
                } else if (scrollDirection < 0) {
                    // Scrolling up - play in reverse
                    videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    // No scroll - pause
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            }
        };

        // Calculate max scroll based on video duration
        const calculateMaxScroll = () => {
            const scrollableHeight = videoDuration * 100; // 100px per second
            setMaxScroll(scrollableHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', calculateMaxScroll);
        calculateMaxScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calculateMaxScroll);
        };
    }, [videoDuration, maxScroll, lastScrollPosition]);

    const handleVideoLoad = () => {
        console.log("Video loaded successfully");
        setIsVideoLoaded(true);
        if (videoRef.current) {
            setVideoDuration(videoRef.current.duration);
            videoRef.current.playbackRate = 1;
            videoRef.current.play().catch(error => {
                console.error("Error playing video:", error);
                setError(error.message);
            });
        }
    };

    const handleVideoError = (e) => {
        console.error("Video error:", e);
        setError("Failed to load video");
    };

    return (
        <>
            <div className="relative w-full" style={{ height: `${maxScroll}px` }}>
                <div className="fixed top-0 left-0 w-full h-screen">
                    <div className="w-full h-full overflow-hidden">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            style={{
                                opacity: isVideoLoaded ? 1 : 0,
                                transition: 'opacity 500ms ease-in'
                            }}
                            muted
                            playsInline
                            onLoadedData={handleVideoLoad}
                            onError={handleVideoError}
                            preload="auto"
                        >
                            <source src="/parallexVid.mp4" type="video/mp4" />
                            <source src="/parallax-video.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>

                        {!isVideoLoaded && !error && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                                <div className="text-white text-xl">Loading video...</div>
                            </div>
                        )}

                        {error && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                                <div className="text-white text-xl">Error: {error}</div>
                            </div>
                        )}

                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-white text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to CyberVerse</h1>
                            <p className="text-xl md:text-2xl drop-shadow-sm">Explore the world of cyberpunk games and movies</p>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundVideo />
        </>
    );
};

export default ParallaxVideo;
