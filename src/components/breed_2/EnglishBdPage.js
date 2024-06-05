import React from "react";
import EnBdCardsState from "../cards/englishbd_cards/EnBdCardsState";
import "../../styles/styles.css";

const EnglishBdPage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Bulldog Inglés</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="englishbd_page">
                <EnBdCardsState />
            </div>
        </div>
    );
};

export default EnglishBdPage;