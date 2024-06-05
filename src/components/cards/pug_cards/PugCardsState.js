import React from "react";
import PugCards from "./PugCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../../styles/styles.css";


const PmnCardsState = () => {
    const pugs = [
        {
            dogimage: BreedImages.pug[0],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.500.000"
        },
        {
            dogimage: BreedImages.pug[1],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$1.960.000"
        },
        {
            dogimage: BreedImages.pug[2],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$1.568.000"
        },
        {
            dogimage: BreedImages.pug[3],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$1.900.000"
        },
        {
            dogimage: BreedImages.pug[4],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$1.700.000"
        },
        {
            dogimage: BreedImages.pug[5],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$1.862.000"
        },
        {
            dogimage: BreedImages.pug[6],
            dogbreed: "Pug",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$1.470.000"
        },
    ];

    return (
        <div className="flex flex-row justify-start flex-wrap ml-12 gap-4">
            {pugs.map((pug, index) => (
                <PugCards key={index} pug={pug} />
            ))}
        </div>
    );
};

export default PmnCardsState;