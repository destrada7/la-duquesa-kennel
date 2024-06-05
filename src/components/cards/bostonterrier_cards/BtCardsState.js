import React from "react";
import BtCards from "./BtCards";
import BreedImages from "../../dogs-images_storage/BreedImages";
import "../../../styles/styles.css";


const BtCardsState = () => {
    const bostonterriers = [
        {
            dogimage: BreedImages.bostonTerrier[0],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$1.700.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[1],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Hembra",
            dogprice: "$2.450.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[2],
            dogbreed: "Boston Terrier",
            dogage: "4 meses",
            doggender: "Hembra",
            dogprice: "$2.150.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[3],
            dogbreed: "Boston Terrier",
            dogage: "4 meses",
            doggender: "Macho",
            dogprice: "$1.860.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[4],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.880.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[5],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$1.900.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[6],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$2.100.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[7],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$1.920.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[8],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.120.000"
        },
        {
            dogimage: BreedImages.bostonTerrier[9],
            dogbreed: "Boston Terrier",
            dogage: "2 meses",
            doggender: "Macho",
            dogprice: "$3.000.000"
        }
    ];

    return (
        <div className="flex flex-row justify-start flex-wrap ml-12 gap-4">
            {bostonterriers.map((bostonterrier, index) => (
                <BtCards key={index} bostonterrier={bostonterrier} />
            ))}
        </div>
    );
};

export default BtCardsState;