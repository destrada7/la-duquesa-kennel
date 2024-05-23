import React from "react";
import footerlogo from "../../images/round-logo.jpg";

const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white p-4" id="footer">
            <figure>
                <img
                    src={footerlogo}
                    alt="footer logo"
                    className="rounded-full w-40 h-40"
                />
            </figure>
            <div className="flex text-white"></div>
        </footer>
    );
};

export default Footer;
