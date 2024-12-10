import React, { useState } from 'react';

const MemoriaP = () => {
    const [dato, setDato] = useState('');
    const [direccion, setDireccion] = useState(0);
    const [memoria, setMemoria] = useState(Array(256).fill('')); // Memoria de 256 celdas

    const escribirEnMemoria = (direccion, valor) => {
        setMemoria(prevMemoria => {
            const nuevaMemoria = [...prevMemoria];
            nuevaMemoria[direccion] = valor;
            return nuevaMemoria;
        });
    };

    const leerDeMemoria = (direccion) => memoria[direccion];

    return (
        <div className="max-w-lg mx-auto p-4 flex flex-col">
            <h1 className="text-lg font-bold mb-4 text-center text-slate-800">Memoria Principal</h1>

            {/* Entrada de Dirección y Dato */}
            <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-1">Dirección</label>
                <input
                    type="number"
                    value={direccion}
                    onChange={(e) => setDireccion(Number(e.target.value))}
                    placeholder="0"
                    className="p-2 border rounded-lg w-24 text-sm"
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-1">Valor</label>
                <textarea
                    value={dato}
                    onChange={(e) => setDato(e.target.value)}
                    placeholder="Dato..."
                    className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg"
                />
            </div>

            {/* Botones de Escribir y Leer */}
            <div className="flex gap-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => escribirEnMemoria(direccion, dato)}>
                    Escribir en Memoria
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => alert(`Valor en dirección ${direccion}: ${leerDeMemoria(direccion)}`)}>
                    Leer de Memoria
                </button>
            </div>

            {/* Visualización de la memoria */}
            <div className="mt-6">
                <h3 className="text-md font-medium text-gray-700">Memoria</h3>
                <div className="max-h-64 overflow-auto grid grid-cols-4 gap-4 mt-2">
                    {memoria.map((valor, index) => (
                        <div key={index} className="border p-2 text-center bg-gray-100">
                            <span>{`[${index}]`}</span>
                            <br />
                            <span>{valor}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemoriaP;
