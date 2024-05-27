import React from "react";
import BeagleCards from "./BeagleCards";
import "../../styles/styles.css";


const BeagleCardsState = () => {
    const beagles = [
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
            {beagles.map((beagle, index) => (
                <BeagleCards key={index} beagle={beagle} />
            ))}
        </div>
    );
};

export default BeagleCardsState;