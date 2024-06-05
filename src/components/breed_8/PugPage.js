import React from "react";
import PugCardsState from "../../components/cards/pug_cards/PugCardsState";

const PugPage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Pug</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="pug_page">
                <PugCardsState />
            </div>
        </div>
    );
};

export default PugPage;