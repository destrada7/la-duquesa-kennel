import React from "react";
import EnBdCards from "./EnBdCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../../styles/styles.css";


const EnBdCardsState = () => {
    const englishbds = [
        {
            dogimage: BreedImages.englishBulldogs[0],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$8.000.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[1],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$9.000.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[2],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$9.000.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[3],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.500.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[4],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "11.000.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[5],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.800.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[6],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.900.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[7],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.400.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[8],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.800.000",
        },
        {
            dogimage: BreedImages.englishBulldogs[0],
            dogbreed: "Bulldog Inglés",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$3.900.000",
        }
    ];

    return (
        <div className="flex gap-4">
            {englishbds.map((englishbd, index) => (
                <EnBdCards key={index} englishbd={englishbd} />
            ))}
        </div>
    );
};

export default EnBdCardsState;