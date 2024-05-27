import React from "react";
import logo from "../../images/logos/round-logo.jpg";
import carticon from "../../icons/icons8-cart-50.png";
import "../../styles/styles.css";

const Header = () => {
    return(
        <header className="grid grid-rows-layout grid-cols-12 bg-gray text-white p-4 font-sans">
            <div className="row-span-1 col-start-1 col-end-6 items-center h-auto">
                <div className="flex items-center ">
                    <figure className="object-cover">
                        <img
                        src={logo}
                        alt="logo"
                        className="rounded-full w-12 h-12"/>
                    </figure>
                    <h1 className="ml-4 h1 font-bold">La Duquesa Kennel</h1>
                </div>
            </div>
            <figure className="row-span-1 col-start-12">
                <img src={carticon} alt="cart icon" />
            </figure>
        </header>
    );
};

export default Header;
