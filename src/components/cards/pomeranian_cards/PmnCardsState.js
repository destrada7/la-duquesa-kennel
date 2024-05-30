import React from "react";
import PmnCards from "./PmnCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../styles/styles.css";


const PmnCardsState = () => {
    const pomeranians = [
        {
            dogimage: BreedImages.pomerania[0],
            dogbreed: "Pomerania",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$13.000.000"
        },
        {
            dogimage: BreedImages.pomerania[1],
            dogbreed: "Pomerania",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$7.300.000"
        },
        {
            dogimage: BreedImages.pomerania[2],
            dogbreed: "Pomerania",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.600.000"
        },
        {
            dogimage: BreedImages.pomerania[3],
            dogbreed: "Pomerania",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.700.000"
        },
        {
            dogimage: BreedImages.pomerania[4],
            dogbreed: "Pomerania",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.950.000"
        },
    ];

    return (
        <div className="flex gap-4">
            {pomeranians.map((pomeranian, index) => (
                <PmnCards key={index} pomeranian={pomeranian} />
            ))}
        </div>
    );
};

export default PmnCardsState;