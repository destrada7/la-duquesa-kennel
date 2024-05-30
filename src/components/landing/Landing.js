import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import FrenchBdPage from "../breed_1/FrenchBdPage";
import EnglishBdPage from "../breed_2/EnglishBdPage";
import DalmatianPage from "../breed_3/DalmatianPage";
import BostonPage from "../breed_4/BostonPage";
import DobermanPage from "../breed_5/DobermanPage";
import ShihTzuPage from "../breed_6/ShihTzuPage";
import BeaglePage from "../breed_7/BeaglePage";
import PugPage from "../breed_8/PugPage";
import PomeranianPage from "../breed_9/PomeranianPage";
import MalePage from "../gender_1/MalePage";
import FemalePage from "../gender_2/FemalePage";
import Price1Page from "../price_1/Price1Page";
import Price2Page from "../price_2/Price2Page";
import Price3Page from "../price_3/Price3Page";
import Age1Page from "../age_1/Age1Page";
import Age2Page from "../age_2/Age2Page";
import Age3Page from "../age_3/Age3Page";

const Landing = () => {
    return (
        <Router>
            <div className="grid grid-rows-layout grid-cols-12 min-h-screen">
                <div className="row-span-1 col-span-full">
                    <Header />
                </div>

                <div className="row-span-2 col-start-1 col-end-3">
                    <Sidebar />
                </div>

                <div className="row-span-2 col-start-3 col-end-13">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/bulldog_frances" element={<FrenchBdPage />} />
                        <Route path="/bulldog_ingles" element={<EnglishBdPage />} />
                        <Route path="/dalmata" element={<DalmatianPage />} />
                        <Route path="/boston_terrier" element={<BostonPage />} />
                        <Route path="/doberman" element={<DobermanPage />} />
                        <Route path="/shih_tzu" element={<ShihTzuPage />} />
                        <Route path="/beagle" element={<BeaglePage />} />
                        <Route path="/pug" element={<PugPage />} />
                        <Route path="/pomerania" element={<PomeranianPage />} />
                        <Route path="/machos" element={<MalePage />} />
                        <Route path="/hembras" element={<FemalePage />} />
                        <Route path="/edad_1" element={<Age1Page />} />
                        <Route path="/edad_2" element={<Age2Page />} />
                        <Route path="/edad_3" element={<Age3Page />} />
                        <Route path="/precio_1" element={<Price1Page />} />
                        <Route path="/precio_2" element={<Price2Page />} />
                        <Route path="/precio_3" element={<Price3Page />} />
                    </Routes>
                </div>

                <div className="row-span-1 col-span-full">
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default Landing;
