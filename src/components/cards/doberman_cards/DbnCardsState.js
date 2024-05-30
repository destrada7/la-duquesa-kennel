import React from "react";
import DbnCards from "./DbnCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../styles/styles.css";


const DbnCardsState = () => {
    const dobermans = [
        {
            dogimage: BreedImages.doberman[0],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$7.200.000"
        },
        {
            dogimage: BreedImages.doberman[1],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.626.000"
        },
        {
            dogimage: BreedImages.doberman[2],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$4.620.000"
        },
        {
            dogimage: BreedImages.doberman[3],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.528.000"
        },
        {
            dogimage: BreedImages.doberman[4],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$4.704.000"
        },
        {
            dogimage: BreedImages.doberman[5],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$4.800.000"
        },
        {
            dogimage: BreedImages.doberman[6],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.720.000"
        },
        {
            dogimage: BreedImages.doberman[7],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$4.620.000"
        },
        {
            dogimage: BreedImages.doberman[8],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$4.920.000"
        },
        {
            dogimage: BreedImages.doberman[9],
            dogbreed: "Doberman",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.760.000"
        },

    ];

    return (
        <div className="flex gap-4">
            {dobermans.map((doberman, index) => (
                <DbnCards key={index} doberman={doberman} />
            ))}
        </div>
    );
};

export default DbnCardsState;