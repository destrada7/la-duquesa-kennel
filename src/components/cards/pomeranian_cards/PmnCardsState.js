import React from "react";
import PmnCards from "./PmnCards";
import "../../styles/styles.css";


const PmnCardsState = () => {
    const pomeranians = [
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
            {pomeranians.map((pomeranian, index) => (
                <PmnCards key={index} pomeranian={pomeranian} />
            ))}
        </div>
    );
};

export default PmnCardsState;