import React, { useState } from 'react';

const MemoriaP = () => {
    const [dato, setDato] = useState('');

    return (
        <div className="max-w-lg mx-auto p-4 flex flex-col">
            <h1 className="text-lg font-bold mb-4 text-center text-slate-800">Memoria Principal</h1>
            <textarea
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dato}
                onChange={(e) => setDato(e.target.value)}
                placeholder="Ingrese dato..."
            />
        </div>
    );
};

export default MemoriaP;