import React from "react";
import DalCardsState from "../cards/dalmatian_cards/DalCardsState";

const DalmatianPage = () => {
    return (
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Dálmata</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="dalmatian_page">
                <DalCardsState />
            </div>
        </div>
    );
};


export default DalmatianPage;