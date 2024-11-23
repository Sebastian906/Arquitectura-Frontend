import React, { useState } from 'react';

const Instrucciones = () => {
    const [instruccion, setInstruccion] = useState('');

    return (
        <div className="max-w-lg mx-auto p-4 flex flex-col">
            <h1 className="text-lg font-bold mb-4 text-center text-slate-800">Ingreso de Instrucciones</h1>
            <textarea
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={instruccion}
                onChange={(e) => setInstruccion(e.target.value)}
                placeholder="Ingrese instruccion..."
            />
        </div>
    );
};

export default Instrucciones;