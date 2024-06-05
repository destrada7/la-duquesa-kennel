import React from "react";
import DbnCardsState from "../cards/doberman_cards/DbnCardsState";

const DobermanPage = () => {
    return (
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Doberman</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="doberman_page">
                <DbnCardsState />
            </div>
        </div>
    );
};

export default DobermanPage;