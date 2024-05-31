import React from "react";
import BeagleCards from "./BeagleCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../../styles/styles.css";


const BeagleCardsState = () => {
    const beagles = [
        {
            dogimage: BreedImages.beagle[0],
            dogbreed: "Beagle",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.116.800",

        },
        {
            dogimage: BreedImages.beagle[1],
            dogbreed: "Beagle",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$1.600.000",

        },
        {
            dogimage: BreedImages.beagle[2],
            dogbreed: "Beagle",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$1.400.000",

        },
        {
            dogimage: BreedImages.beagle[3],
            dogbreed: "Beagle",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.116.800",

        },
        {
            dogimage: BreedImages.beagle[4],
            dogbreed: "Beagle",
            dogage: "2 meses",
            doggender: "hembra",
            dogprice: "$1.764.000",

        },
        {
            dogimage: BreedImages.beagle[5],
            dogbreed: "Beagle",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.000.000",

        }
    ];

    return (
        <div className="flex gap-4">
            {beagles.map((beagle, index) => (
                <BeagleCards key={index} beagle={beagle} />
            ))}
        </div>
    );
};

export default BeagleCardsState;