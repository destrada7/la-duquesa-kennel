import React from "react";
import FrenchBdCards from "./FrenchBdCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../../styles/styles.css";


const FrenchBdCardsState = () => {
    const frenchbds = [
        {
            dogimage: BreedImages.frenchBulldogs[0],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.500.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[1],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.400.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[2],
            dogbreed: "Bulldog Francés",
            dogage: "4 meses",
            doggender: "Macho",
            dogprice: "$4.800.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[3],
            dogbreed: "Bulldog Francés",
            dogage: "3 años",
            doggender: "Macho",
            dogprice: "$3.000.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[4],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$4.800.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[5],
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "$2.550.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[6],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.250.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[7],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$8.000.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[8],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$4.000.000",
        },
        {
            dogimage: BreedImages.frenchBulldogs[0],
            dogbreed: "Bulldog Francés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$7.596.960",
        }
    ];

    return (
        <div className="flex flex-row justify-start flex-wrap ml-12 gap-4">
            {frenchbds.map((frenchbd, index) => (
                <FrenchBdCards key={index} frenchbd={frenchbd} />
            ))}
        </div>
    );
};

export default FrenchBdCardsState;
