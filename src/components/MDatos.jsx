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

    const actualizarDato = (index, nuevoDato) => {
        const nuevosDatos = [...datos];
        nuevosDatos[index] = nuevoDato;
        setDatos(nuevosDatos);
    };

    return (
        <div className="flex justify-center items-center py-4 max-w-2xl mx-auto">
            <div className="overflow-x-auto max-h-[80vh] w-full sm:w-3/4 lg:w-2/3 p-4">
                <h1 className="text-xl font-bold mb-4 text-center text-slate-800">Memoria de Datos</h1>
                
                {/* Cuadrícula con scroll horizontal */}
                <table className="table-auto w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-400 p-4">Posición</th>
                            <th className="border border-gray-400 p-4">Dato Binario</th>
                            <th className="border border-gray-400 p-4">Dato Decimal</th>
                            <th className="border border-gray-400 p-4">Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posicion.map((pos, index) => {
                            const posicionDecimal = parseInt(pos, 2); // Convertir binario a decimal
                            const datoDecimal = parseInt(datos[index], 2); // Convertir binario a decimal

                            return (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-400 p-4">{pos}</td>
                                    <td className="border border-gray-400 p-4">{datos[index]}</td>
                                    <td className="border border-gray-400 p-4">{datoDecimal}</td>
                                    <td className="border border-gray-400 p-4">
                                        <input
                                            type="text"
                                            className="p-2 text-xs border border-gray-300 rounded w-full"
                                            value={datos[index]}
                                            onChange={(e) => actualizarDato(index, e.target.value)}
                                            maxLength={8}  // Limitar a 8 bits
                                            placeholder="Dato binario"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MDatos;