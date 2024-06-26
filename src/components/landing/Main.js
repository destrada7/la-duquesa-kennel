import React, { useEffect, useRef } from "react";
import mainlogo from "../../images/logos/CRIADEROLADUQUESAKENNEL.png";
import whatsappicon from "../../icons/icons8-whatsapp-70.png";
import video1 from "../../videos/1.mp4";
import video2 from "../../videos/2.mp4";
import video3 from "../../videos/3.mp4";
import "../../styles/styles.css";

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
                    <img className="object-cover"
                        src={mainlogo}
                        alt="main logo"
                    />
                </figure>
                <div className="flex flex-col mt-4 gap-2 text-white" id="main_intro">
                    <h2 className="h2 font-bold">Bienvenido a nuestro criadero</h2>
                    <p className="p">¡Encuentra la mascota que tanto anhelabas!</p>
                </div>
            </div>
            <figure className="object-cover absolute bottom-8 right-8  transform translate-x-0 translate-y-0 hover:cursor-pointer hover:-translate-y-2 transition duration-300 ease-in-out">
                <img src={whatsappicon} alt="whatsapp icon" />
            </figure>
        </main>
    );
};

export default Main;
