import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

const Landing = () => {

    return (
        <div className="grid grid-rows-layout grid-cols-layout min-h-screen">
            <div className="row-span-1 col-span-full">
                <Header />
            </div>
            <div className="row-span-1 col-span-1">
                <Sidebar />
            </div>
            <div className="row-span-1 col-span-2">
                <Main />
            </div>
            <div className="row-span-1 col-span-full">
                <Footer />
            </div>
        </div>
    );
};

export default Landing;