import React from "react";
import FrenchBdCardsState from "../cards/frenchbd_cards/FrenchBdCardsState";
import "../../styles/styles.css";

const FrenchBdPage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Bulldog Fránces</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="frenchbd_page">
                <FrenchBdCardsState />
            </div>
        </div>
    );
};


export default FrenchBdPage;