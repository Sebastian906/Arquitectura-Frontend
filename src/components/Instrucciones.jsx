import React, { useState } from 'react';

const Instrucciones = () => {
    const [instrucciones, setInstrucciones] = useState([]);
    const [instruccionActual, setInstruccionActual] = useState('');
    const [error, setError] = useState('');

    const parseInstruccion = (instruccion) => {
        const partes = instruccion.trim().split(/\s+/);
        if (partes.length < 3) {
            throw new Error('Formato inválido: falta destino o fuente.');
        }
        const [operacion, destino, fuente] = partes;

        const operacionesValidas = ['mov', 'add', 'sub'];
        if (!operacionesValidas.includes(operacion.toLowerCase())) {
            throw new Error(`Operación inválida: ${operacion}`);
        }

        const registrosValidos = ['ax', 'bx', 'cx', 'dx'];
        if (!registrosValidos.includes(destino.toLowerCase()) && isNaN(Number(destino))) {
            throw new Error(`Destino inválido: ${destino}`);
        }
        if (!registrosValidos.includes(fuente.toLowerCase()) && isNaN(Number(fuente))) {
            throw new Error(`Fuente inválida: ${fuente}`);
        }

        return { operacion, destino, fuente };
    };

    const agregarInstruccion = () => {
        try {
            if (instruccionActual.trim()) {
                const instruccionValida = parseInstruccion(instruccionActual);
                setInstrucciones(prev => [...prev, instruccionValida]);
                setInstruccionActual('');
                setError('');
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded-lg">
            <div className="max-w-lg mx-auto p-4 flex flex-col">
                <h1 className="text-lg font-bold mb-4 text-center text-slate-800">Ingreso de Instrucciones</h1>
                <textarea
                    value={instruccionActual}
                    onChange={(e) => setInstruccionActual(e.target.value)}
                    placeholder="Ejemplo: mov ax, 5"
                    className="border rounded p-2 w-full text-sm"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={agregarInstruccion}
                >
                    Agregar
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => setInstrucciones([])}
                >
                    Limpiar Lista
                </button>
                <div className="mt-4">
                    <h2 className="text-lg font-bold mb-2 text-slate-800">Lista de Instrucciones</h2>
                    {instrucciones.length === 0 ? (
                        <p className="text-gray-500">No hay instrucciones agregadas.</p>
                    ) : (
                        <ul className="list-disc pl-5">
                            {instrucciones.map((inst, index) => (
                                <li key={index} className="text-sm">
                                    <strong>{inst.operacion}</strong> {inst.destino}, {inst.fuente}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Instrucciones;