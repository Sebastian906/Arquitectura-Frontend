import React, { useState } from 'react';

const MemoriaRAM = () => {
    const [datos, setDatos] = useState([]); // Segmento de datos
    const [programa, setPrograma] = useState([]); // Segmento de programa

    // Función para agregar un dato al segmento de datos
    const agregarDato = () => {
        const nuevoDato = prompt("Ingresa el dato a almacenar:");
        if (nuevoDato && nuevoDato.trim() !== "") {
            setDatos((prev) => [...prev, nuevoDato]);
        }
    };

    // Función para agregar una instrucción al segmento de programa
    const agregarInstruccion = () => {
        const nuevaInstruccion = prompt("Ingresa la instrucción del programa:");
        if (nuevaInstruccion && nuevaInstruccion.trim() !== "") {
            setPrograma((prev) => [...prev, nuevaInstruccion]);
        }
    };

    return (
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Memoria RAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Segmento de Datos */}
                <div className="bg-gray-100 p-4 shadow rounded">
                    <h3 className="text-md font-semibold text-gray-700 mb-2">Segmento de Datos</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {datos.map((dato, index) => (
                            <li key={index}>{dato}</li>
                        ))}
                    </ul>
                    <button
                        onClick={agregarDato}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Agregar Dato
                    </button>
                </div>

                {/* Segmento de Programa */}
                <div className="bg-gray-100 p-4 shadow rounded">
                    <h3 className="text-md font-semibold text-gray-700 mb-2">Segmento de Programa</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {programa.map((instruccion, index) => (
                            <li key={index}>{instruccion}</li>
                        ))}
                    </ul>
                    <button
                        onClick={agregarInstruccion}
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Agregar Instrucción
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemoriaRAM;
