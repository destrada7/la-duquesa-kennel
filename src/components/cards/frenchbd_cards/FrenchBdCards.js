import React from "react";
import "../../styles/styles.css";

const FrenchBdCards = ({ frenchbd }) => {
    const { dogimage, dogbreed, dogage, doggender, dogprice, dogdescription } = frenchbd;

    return (
        <div className="flex flex-col w-full h-auto p-4 border border-gray-300 rounded-lg">
            <figure>
                <img src={dogimage} alt={dogbreed} className="w-full h-40 object-cover rounded-lg"/>
            </figure>
            <figcaption className="flex flex-col mt-2">
                <h3 className="text-lg font-semibold">{dogbreed}</h3>
                <p>{dogage}</p>
                <p>{doggender}</p>
                <p>{dogdescription}</p>
                <h4 className="text-lg font-bold">{dogprice}</h4>
            </figcaption>
        </div>
    );
};

export default FrenchBdCards;
