import React from "react";
import BeagleCardsState from "../cards/beagle_cards/BeagleCardsState";

const BeaglePage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Beagle</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="beagle_page">
                <BeagleCardsState />
            </div>
        </div>
    );
};

export default BeaglePage;