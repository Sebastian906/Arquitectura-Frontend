import React, { useState } from 'react';

const Instrucciones = () => {
    const [instrucciones, setInstrucciones] = useState([]);
    const [instruccionActual, setInstruccionActual] = useState('');

    const parseInstruccion = (instruccion) => {
        // Formato: OPERACION DESTINO, FUENTE
        const partes = instruccion.split(/\s+/);
        return {
            operacion: partes[0],
            destino: partes[1],
            fuente: partes[2]
        };
    };

    const agregarInstruccion = () => {
        if (instruccionActual.trim()) {
            const instruccionValida = parseInstruccion(instruccionActual);
            setInstrucciones(prev => [...prev, instruccionValida]);
            setInstruccionActual('');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded-lg">
            <div className="max-w-lg mx-auto p-4 flex flex-col">
                <h1 className="text-lg font-bold mb-4 text-center text-slate-800">Ingreso de Instrucciones</h1>
                <textarea
                    value={instruccionActual}
                    onChange={(e) => setInstruccionActual(e.target.value)}
                    placeholder="mov ax, 5"
                />
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={agregarInstruccion}
                >
                    Agregar
                </button>
                <div>
                    {instrucciones.map((inst, index) => (
                        <div key={index}>
                            {inst.operacion} {inst.destino} {inst.fuente}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instrucciones;