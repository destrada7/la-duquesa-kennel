import React from "react";
import PmnCardsState from "../cards/pomeranian_cards/PmnCardsState";

const PomeranianPage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
        <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Pomerania</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="pomeranian_page">
                <PmnCardsState />
            </div>
        </div>
    );

};

export default PomeranianPage;