import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
                                <li><Link to="/bulldog_frances">Bulldog Fránces</Link></li>
                                <li><Link to="/bulldog_ingles">Bulldog Inglés</Link></li>
                                <li><Link to="/dalmata">Dálmata</Link></li>
                                <li><Link to="/boston_terrier">Boston Terrier</Link></li>
                                <li><Link to="/doberman">Doberman</Link></li>
                                <li><Link to="/shih_tzu">Shih Tzu</Link></li>
                                <li><Link to="/beagle">Beagle</Link></li>
                                <li><Link to="/pug">Pug</Link></li>
                                <li><Link to="/pomerania">Pomerania</Link></li>
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
                                <li><Link to="/machos">Macho</Link></li>
                                <li><Link to="/hembras">Hembra</Link></li>
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
                                <li><Link to="/edad_1">Menos de 2 meses</Link></li>
                                <li><Link to="/edad_2">2 a 9 semanas</Link></li>
                                <li><Link to="/edad_3">10 a 44 meses</Link></li>
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
                                <li><Link to="/precio_1">Hasta $2.500.000</Link></li>
                                <li><Link to="/precio_2">Desde $2.500.000 a $4.000.000</Link></li>
                                <li><Link to="/precio_3">Más de $4.000.000</Link></li>
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
