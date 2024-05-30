import React from "react";
import DalCards from "./DalCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../styles/styles.css";


const DalCardsState = () => {
    const dalmatians = [
        {
            dogimage: BreedImages.dalmatian[0],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.300.000",
        },
        {
            dogimage: BreedImages.dalmatian[1],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.646.000",
        },
        {
            dogimage: BreedImages.dalmatian[2],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.240.000",

        },
        {
            dogimage: BreedImages.dalmatian[3],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$5.520.000",
        },
        {
            dogimage: BreedImages.dalmatian[4],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.600.000",
        },
        {
            dogimage: BreedImages.dalmatian[5],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.840.000",
        },
        {
            dogimage: BreedImages.dalmatian[6],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$4.800.000",
        },
        {
            dogimage: BreedImages.dalmatian[7],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.360.000",
        },
        {
            dogimage: BreedImages.dalmatian[8],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$5.762.400",
        },
        {
            dogimage: BreedImages.dalmatian[9],
            dogbreed: "Dálmata",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.352.000",
        }
    ];

    return (
        <div className="flex gap-4">
            {dalmatians.map((dalmatian, index) => (
                <DalCards key={index} dalmatian={dalmatian} />
            ))}
        </div>
    );
};

export default DalCardsState;