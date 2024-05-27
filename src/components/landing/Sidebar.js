import React, { useState } from "react";
import "../../styles/styles.css";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const handleDropdownClick = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };


    return(
        <aside className="bg-dark-gray p-4 w-full h-full text-white">
            <div className="flex flex-col w-full h-auto justify-start">
                <h2 className="flex justify-start p-2 h2 font-bold">Cátalogo</h2>
                <div className="flex flex-col w-full h-auto" id="dropdowns">
                    <div className="mb-4">
                        <button
                            id="raza-dropdown"
                            onClick={() => handleDropdownClick('raza')}
                            className="w-full text-left p p-2"
                        >
                            Por Raza
                        </button>
                        {openDropdown === 'raza' && (
                            <ul className="flex flex-col gap-2 text-left pl-2 text-yellow">
                                <li>Bulldog Fránces</li>
                                <li>Bulldog Inglés</li>
                                <li>Dálmata</li>
                                <li>Boston Terrier</li>
                                <li>Doberman</li>
                                <li>Shih Tzu</li>
                                <li>Beagle</li>
                                <li>Pug</li>
                                <li>Pomerania</li>
                            </ul>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            id="genero-dropdown"
                            onClick={() => handleDropdownClick('genero')}
                            className="w-full text-left p p-2"
                        >
                            Por Genero
                        </button>
                        {openDropdown === 'genero' && (
                            <ul className="flex flex-col gap-2 text-left pl-2 text-yellow">
                                <li>Macho</li>
                                <li>hembra</li>
                            </ul>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            id="edad-dropdown"
                            onClick={() => handleDropdownClick('edad')}
                            className="w-full text-left p p-2"
                        >
                            Por Edad
                        </button>
                        {openDropdown === 'edad' && (
                            <ul className="flex flex-col gap-2 text-left pl-2 text-yellow">
                                <li>Menos de 2 meses</li>
                                <li>2 a 9 semanas</li>
                                <li>10 a 44 meses</li>
                            </ul>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            id="precio-dropdown"
                            onClick={() => handleDropdownClick('precio')}
                            className="w-full text-left p p-2"
                        >
                            Por Precio
                        </button>
                        {openDropdown === 'precio' && (
                            <ul className="flex flex-col gap-2 text-left pl-2 text-yellow">
                                <li>Hasta $2.500.000</li>
                                <li>Desde $2.500.000 a $4.000.000</li>
                                <li>Más de $4.000.000</li>
                            </ul>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            id="pedigree-dropdown"
                            onClick={() => handleDropdownClick('pedigree')}
                            className="w-full text-left p p-2"
                        >
                            Otras Características
                        </button>
                        {openDropdown === 'pedigree' && (
                            <ul className="flex flex-col gap-2 text-left pl-2 text-yellow">
                                <li>Con Pedigree</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
