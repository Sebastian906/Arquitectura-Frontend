import React, { useState, useEffect } from 'react';

const MDatos = () => {
    const [datos, setDatos] = useState([]);
    const [posicion, setPosicion] = useState([]);

    useEffect(() => {
        const generarDatos = () => {
            const datosGenerados = [];
            const posicionGenerada = [];
            for (let i = 0; i <= 255; i++) {
                const binario = i.toString(2).padStart(8, '0');
                posicionGenerada.push(binario);
                const datoGenerado = Math.floor(Math.random() * 256).toString(2).padStart(8, '0');
                datosGenerados.push(datoGenerado);
            }
            setDatos(datosGenerados);
            setPosicion(posicionGenerada);
        };
        generarDatos();
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="overflow-y-auto max-h-screen w-2/3">
                <h1 className="text-lg font-bold mb-4 text-center text-slate-800">Memoria de Datos</h1>
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-2">Posición</th>
                            <th className="border border-gray-400 p-2">Dato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posicion.map((pos, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 p-2">{pos}</td>
                                <td className="border border-gray-400 p-2">{datos[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MDatos;