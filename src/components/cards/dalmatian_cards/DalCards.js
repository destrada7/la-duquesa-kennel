import React from "react";
import "../../../styles/styles.css";

const DalCards = ({ dalmatian }) => {
    const { dogimage, dogbreed, dogage, doggender, dogprice } = dalmatian;

    return (
        <div className="dog-container">
            <figure className="flex w-full h-80 object-cover">
                <img src={dogimage} alt={dogbreed} className="w-full h-auto object-cover rounded-lg"/>
            </figure>
            <figcaption className="flex flex-col flex-grow align-center
            justify-center mt-2">
                <h3 className="text-lg mt-1 font-semibold">{dogbreed}</h3>
                <p className="mt-2">{dogage}</p>
                <p>{doggender}</p>
                <h4 className="text-lg font-bold">{dogprice}</h4>
            </figcaption>
        </div>
    );
};

export default DalCards;