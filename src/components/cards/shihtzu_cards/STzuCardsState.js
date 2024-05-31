import React from "react";
import STzuCards from "./STzuCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../../styles/styles.css";


const STzuCardsState = () => {
    const shihtzus = [
        {
            dogimage: BreedImages.shihTzu[0],
            dogbreed: "Shih Tzu",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.450.000",
        },
        {
            dogimage: BreedImages.shihTzu[1],
            dogbreed: "Shih Tzu",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.500.000",
        },
        {
            dogimage: BreedImages.shihTzu[2],
            dogbreed: "Shih Tzu",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.000.000",
        },
        {
            dogimage: BreedImages.shihTzu[3],
            dogbreed: "Shih Tzu",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.150.000",
        },
    ];

    return (
        <div className="flex gap-4">
            {shihtzus.map((shihtzu, index) => (
                <STzuCards key={index} shihtzu={shihtzu} />
            ))}
        </div>
    );
};

export default STzuCardsState;