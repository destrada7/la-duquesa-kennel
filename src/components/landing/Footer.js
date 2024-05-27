import React from "react";
import footerlogo from "../../images/logos/round-logo.jpg";
import mailicon from "../../icons/icons8-gmail-50.png";
import phoneicon from "../../icons/icons8-phone-50.png";
import locationicon from "../../icons/icons8-location-50.png";
import fbicon from "../../icons/icons8-facebook-50.png";
import igicon from "../../icons/icons8-instagram-50.png";
import "../../styles/styles.css";

const Footer = () => {
    return (
        <footer className="bg-gray flex flex-col w-full items-center text-white p-8" id="footer">
            <div className="flex flex-wrap justify-between w-full max-w-screen-lg">
                <figure className="flex flex-col items-center mb-8 md:mb-0 md:w-auto w-full">
                    <img
                        src={footerlogo}
                        alt="footer logo"
                        className="rounded-full w-20 h-20"
                    />
                </figure>
                <div className="flex flex-col items-start mb-8 md:mb-0 md:w-auto w-full">
                    <h2 className="text-lg font-semibold mb-4">Contáctanos</h2>
                    <div className="flex flex-col gap-2">
                        <figure className="flex items-center gap-2">
                            <img
                                src={phoneicon}
                                alt="phone icon"
                                className="w-8 h-8"
                            />
                            <figcaption>
                                <p>+57 317 364 3644</p>
                            </figcaption>
                        </figure>
                        <figure className="flex items-center gap-2">
                            <img
                                src={mailicon}
                                alt="mail icon"
                                className="w-8 h-8"
                            />
                            <figcaption aria-label="email button">
                                <a href="mailto:laduquesakennel@gmail.com">
                                    laduquesakennel@gmail.com
                                </a>
                            </figcaption>
                        </figure>
                        <figure className="flex items-center gap-2">
                            <img
                                src={locationicon}
                                alt="location icon"
                                className="w-8 h-8"
                            />
                            <figcaption>
                                <p>Carrera 29 E Sur - Medellín, Colombia</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col items-start mb-8 md:mb-0 md:w-auto w-full">
                    <h2 className="text-lg font-semibold mb-4">Redes Sociales</h2>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/DuquesaKennel" target="_blank" rel="noreferrer" aria-label="facebook button">
                            <img
                                src={fbicon}
                                alt="facebook icon"
                                className="w-8 h-8"
                            />
                        </a>
                        <a href="https://www.instagram.com/laduquesakennel" target="_blank" rel="noreferrer" aria-label="instagram button">
                            <img
                                src={igicon}
                                alt="instagram icon"
                                className="w-8 h-8"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center w-full">
                <p>&copy; 2024 Criadero La Duquesa Kennel. Todos los Derechos Reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
