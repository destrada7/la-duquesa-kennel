import React, { useEffect, useRef } from "react";
import mainlogo from "../../images/CRIADEROLADUQUESAKENNEL.png";
import video1 from "../../videos/1.mp4";
import video2 from "../../videos/2.mp4";
import video3 from "../../videos/3.mp4";

const Main = () => {
    const videosRef = useRef([]);
    const currentVideoIndex = useRef(0);

    useEffect(() => {
        const handleVideoEnd = () => {
            const currentVideo = videosRef.current[currentVideoIndex.current];
            currentVideo.classList.add('hidden');

            currentVideoIndex.current = (currentVideoIndex.current + 1) % videosRef.current.length;
            const nextVideo = videosRef.current[currentVideoIndex.current];
            nextVideo.classList.remove('hidden');
            nextVideo.play();
        };

        videosRef.current.forEach((video, index) => {
            video.addEventListener('ended', handleVideoEnd);
            if (index === 0) video.play();
        });

        return () => {
            videosRef.current.forEach((video) => {
                video.removeEventListener('ended', handleVideoEnd);
            });
        };
    }, []);

    return (
        <main className="relative flex flex-col items-center justify-center gap-8 bg-black p-4 h-full" id="main">
            <div className="absolute inset-0 z-0 opacity-50">
                <video ref={el => videosRef.current[0] = el} className="w-full h-full object-cover" muted>
                    <source src={video1} type="video/mp4" />
                </video>
                <video ref={el => videosRef.current[1] = el} className="w-full h-full object-cover hidden" muted>
                    <source src={video2} type="video/mp4" />
                </video>
                <video ref={el => videosRef.current[2] = el} className="w-full h-full object-cover hidden" muted>
                    <source src={video3} type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10 text-center"> {/* Added text-center class here */}
                <figure className="flex justify-center">
                    <img
                        src={mainlogo}
                        alt="main logo"
                    />
                </figure>
                <div className="flex flex-col mt-4 gap-2 text-white" id="main_intro">
                    <h2 className="text-2xl font-bold">Bienvenido a nuestro criadero</h2>
                    <p>¡Encuentra la mascota que tanto anhelabas!</p>
                </div>
            </div>
        </main>
    );
};

export default Main;
