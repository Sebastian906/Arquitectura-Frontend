import React, { useState } from 'react';

const DispositivosIO = ({ obtenerEntrada, obtenerSalida, agregarDispositivo }) => {
    const [entrada, setEntrada] = useState(obtenerEntrada() || []); // Lista de entrada inicial
    const [salida, setSalida] = useState(obtenerSalida() || []); // Lista de salida inicial

    const manejarAgregarDispositivo = (tipo) => {
        const nuevoDispositivo = agregarDispositivo(tipo);

        // Validar si el usuario ingresó un dispositivo válido
        if (!nuevoDispositivo || nuevoDispositivo.trim() === "") {
            return; // No hacer nada si el usuario cancela o deja el campo vacío
        }
        if (tipo === 'entrada') {
            setEntrada((prev) => [...prev, nuevoDispositivo]);
        } else if (tipo === 'salida') {
            setSalida((prev) => [...prev, nuevoDispositivo]);
        }
    };

    return (
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800">
                Dispositivos de Entrada y Salida
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Lista de dispositivos de entrada */}
                <div className="flex-1">
                    <h3 className="text-md font-semibold text-gray-700">Entrada</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {entrada.map((dispositivo, index) => (
                            <li key={index}>{dispositivo}</li>
                        ))}
                    </ul>
                    <button
                        onClick={() => manejarAgregarDispositivo('entrada')}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Agregar Dispositivo de Entrada
                    </button>
                </div>

                {/* Lista de dispositivos de salida */}
                <div className="flex-1">
                    <h3 className="text-md font-semibold text-gray-700">Salida</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {salida.map((dispositivo, index) => (
                            <li key={index}>{dispositivo}</li>
                        ))}
                    </ul>
                    <button
                        onClick={() => manejarAgregarDispositivo('salida')}
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Agregar Dispositivo de Salida
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DispositivosIO;