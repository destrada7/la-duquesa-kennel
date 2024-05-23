import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

const Landing = () => {
    return (
        <div className="grid grid-rows-layout grid-cols-12 min-h-screen">
            <div className="row-span-1 col-span-full">
                <Header />
            </div>
            <div className="row-span-2 col-start-1 col-end-3">
                <Sidebar />
            </div>
            <div className="row-span-2 col-start-3 col-end-13">
                <Main />
            </div>
            <div className="row-span-1 col-span-full">
                <Footer />
            </div>
        </div>
    );
};

export default Landing;
