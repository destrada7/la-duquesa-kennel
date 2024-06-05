import React from "react";
import STzuCardsState from "../cards/shihtzu_cards/STzuCardsState";

const ShihTzuPage = () => {
    return(
        <div className="bg-contrast-gray flex flex-col items-center w-full h-full">
            <h2 className="h2 justify-center font-bold text-white mt-12 mb-4 after-h2">Shih Tzu</h2>
            <div className="p-4 flex flex-wrap w-full h-auto mb-8" id="shihtzu_page">
                <STzuCardsState />
            </div>
        </div>
    );
}

export default ShihTzuPage;