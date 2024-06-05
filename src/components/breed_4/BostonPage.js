import React from "react";
import BtCardsState from "../cards/bostonterrier_cards/BtCardsState";

const BostonPage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Boston Terrier</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="bostonterrier_page">
                <BtCardsState />
            </div>
        </div>
    );
};

export default BostonPage;