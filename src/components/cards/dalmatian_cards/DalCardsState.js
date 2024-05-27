import React from "react";
import DalCards from "./DalCards";
import "../../styles/styles.css";


const DalCardsState = () => {
    const dalmatians = [
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
        },
        {
            dogimage: "",
            dogbreed: "Bulldog Francés",
            dogage: "2 años",
            doggender: "Hembra",
            dogprice: "",
            dogdescription: ""
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