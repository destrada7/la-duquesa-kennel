import React from "react";
import logo from "../../images/round-logo.jpg";

const Header = () => {
    return(
        <header className="bg-gray-800 text-white p-4 font-sans">
            <div className="flex items-center h-auto">
                <figure>
                    <img
                    src={logo}
                    alt="logo"
                    className="rounded-full w-12 h-12"/>
                </figure>
                <h1 className="ml-4 text-2xl">La Duquesa Kennel</h1>
            </div>
        </header>
    );
};

export default Header;
