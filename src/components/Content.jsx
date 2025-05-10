import React from 'react'
import News from './News'

export const Content = () => {
    return (
        <>
            <div className="relative w-full bg-repeat bg-center" style={{
                backgroundImage: "url('https://www.cyberpunk.net/build/images/dots-top-mobile-88518d1b.png')",
                backgroundColor: "#000",
                backgroundSize: "clamp(40px, 8vw, 60px)"
            }}>

                {/* Top shadow overlay */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
                {/* Your content */}
                <div className="relative z-20">
                    {/* content here */}
                </div>
                <div>
                    <News />
                </div>
            </div>
        </>
    )
}
