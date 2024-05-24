import React, { useState } from "react";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const handleDropdownClick = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };


    return(
        <aside className="bg-dark-gray p-4 w-full h-full text-white">
            <div className="flex flex-col w-full h-auto items-center justify-start">
                <h2 className="font-bold">Cátalogo</h2>
                <div className="flex flex-col w-full h-auto" id="dropdowns">
                    <div className="mb-4">
                        <button
                            id="raza-dropdown"
                            onClick={() => handleDropdownClick('raza')}
                            className="w-full text-left p-2"
                        >
                            Por Raza
                        </button>
                        {openDropdown === 'raza' && (
                            <ul>
                                <li>Raza 1</li>
                                <li>Raza 2</li>
                                <li>Raza 3</li>
                            </ul>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            id="genero-dropdown"
                            onClick={() => handleDropdownClick('genero')}
                            className="w-full text-left p-2"
                        >
                            Por Genero
                        </button>
                        {openDropdown === 'genero' && (
                            <ul>
                                <li>Genero 1</li>
                                <li>Genero 2</li>
                            </ul>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            id="edad-dropdown"
                            onClick={() => handleDropdownClick('edad')}
                            className="w-full text-left p-2"
                        >
                            Por Edad
                        </button>
                        {openDropdown === 'edad' && (
                            <ul>
                                <li>Edad 1</li>
                                <li>Edad 2</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
