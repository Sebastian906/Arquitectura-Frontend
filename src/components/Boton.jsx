import React from 'react';

const Boton = () => {
    const handleClick = () => {
        console.log('Botón clickeado');
    };

    return (
        <button
            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleClick}
        >
            Ejecutar
        </button>
    );
};

export default Boton;