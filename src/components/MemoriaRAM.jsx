import React, { useState } from 'react';
import { useCallback } from 'react';

const MemoriaRAM = () => {
    const [memoria, setMemoria] = useState({
        datos: Array.from({ length: 256 }, (_, index) => ({
            valor: Math.floor(Math.random() * 256),
            direccion: index
        })),
        programa: []
    });

    const escribirDato = useCallback((direccion, valor) => {
        if (direccion < 0 || direccion > 255) {
            console.error('Dirección fuera de rango:', direccion);
            return;
        }
        console.log(`Escribiendo en dirección ${direccion} el valor ${valor}`);
        setMemoria(prev => {
            const nuevosDatos = [...prev.datos];
            nuevosDatos[direccion] = { valor, direccion };
            return { ...prev, datos: nuevosDatos };
        });
    }, []);

    const leerDato = useCallback((direccion) => {
        if (direccion < 0 || direccion > 255) {
            console.error('Dirección fuera de rango:', direccion);
            return null;
        }
        const dato = memoria.datos[direccion];
        console.log(`Leyendo dato en dirección ${direccion}:`, dato);
        return dato;
    }, [memoria]);

    const agregarInstruccionPrograma = useCallback((instruccion) => {
        if (!instruccion) {
            console.error('Instrucción inválida:', instruccion);
            return;
        }
        console.log('Agregando instrucción:', instruccion);
        setMemoria(prev => ({
            ...prev,
            programa: [...prev.programa, instruccion]
        }));
    }, []);

    return (
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Memoria RAM</h2>
            <div className="overflow-y-auto max-h-64 w-full">
                <table className="table-auto border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-2">Dirección</th>
                            <th className="border border-gray-400 p-2">Dato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memoria.datos.map((dato, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-400 p-2">{dato.direccion}</td>
                                <td className="border border-gray-400 p-2">{dato.valor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Botones de prueba */}
            <div className="mt-4 space-y-2">
                <button
                    onClick={() => escribirDato(10, 42)} // Cambiar dirección y valor para probar
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Escribir en Dirección 10
                </button>
                <button
                    onClick={() => console.log(leerDato(10))} // Cambiar dirección para probar
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Leer de Dirección 10
                </button>
                <button
                    onClick={() => agregarInstruccionPrograma('LOAD 10')} // Cambiar instrucción para probar
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar Instrucción: LOAD 10
                </button>
            </div>

            <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Segmento de Programa</h3>
                <ul>
                    {memoria.programa.map((instruccion, index) => (
                        <li key={index} className="text-gray-800">
                            {instruccion}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MemoriaRAM;
