import React from "react";
import BtCards from "./BtCards";
import "../../styles/styles.css";


const BtCardsState = () => {
    const bostonterriers = [
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
            {bostonterriers.map((bostonterrier, index) => (
                <BtCards key={index} bostonterrier={bostonterrier} />
            ))}
        </div>
    );
};

export default BtCardsState;