import React from "react";
import EnBdCards from "./EnBdCards";
import "../../styles/styles.css";


const EnBdCardsState = () => {
    const englishbds = [
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
            {englishbds.map((englishbd, index) => (
                <EnBdCards key={index} englishbd={englishbd} />
            ))}
        </div>
    );
};

export default EnBdCardsState;