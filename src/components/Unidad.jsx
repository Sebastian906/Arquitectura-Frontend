import React, { useCallback, useState } from 'react';

const Unidad = () => {
    const [registros, setRegistros] = useState({
        alu: '', 
        br: '', 
        pc: 0, 
        ir: '', 
        uc: '', 
        mar: '', 
        mbr: ''
    });

    const fetch = useCallback(() => {
        // Capturar instrucción de memoria RAM
        setRegistros(prev => ({
            ...prev, 
            pc: prev.pc + 1,
            mar: `Dirección ${prev.pc}`,
            ir: `Instrucción leída`
        }));
    }, []);

    const decode = useCallback(() => {
        // Decodificar instrucción en IR
        setRegistros(prev => ({
            ...prev,
            uc: 'Decodificando instrucción'
        }));
    }, []);

    const execute = useCallback(() => {
        // Ejecutar instrucción 
        setRegistros(prev => ({
            ...prev,
            alu: 'Procesando operación'
        }));
    }, []);

    const processCycle = () => {
        fetch();
        decode(); 
        execute();
    };

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800 text-center">Unidad Central de Procesamiento (CPU)</h2>

            <div className="grid grid-cols-2 gap-6 items-start">
                {/* Bloque izquierdo */}
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="border border-gray-400 w-32 h-32 flex items-center justify-center bg-white text-center rounded-lg shadow">
                            <span className="text-sm font-semibold text-gray-700">ALU</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Operación"
                            className="absolute bottom-[-20px] left-[50%] transform -translate-x-1/2 p-2 text-sm border rounded-md w-36 mt-4"
                            value={registros.alu}
                            onChange={(e) => setRegistros(e.target.value)}
                        />
                    </div>

                    {/* Bloques BR y PC */}
                    <div className="flex justify-between mt-8 w-full">
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-medium text-gray-700 mb-1">BR</label>
                            <input
                                type="text"
                                className="p-2 border rounded-lg w-24 text-sm"
                                value={registros.br}
                                onChange={(e) => setRegistros(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-medium text-gray-700 mb-1">PC</label>
                            <input
                                type="text"
                                className="p-2 border rounded-lg w-24 text-sm"
                                value={registros.pc}
                                onChange={(e) => setRegistros(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Bloque derecho */}
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">IR (Instruction Register)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={registros.ir}
                            onChange={(e) => setRegistros(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">UC (Unidad de Control)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={registros.uc}
                            onChange={(e) => setRegistros(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">MAR (Memory Address Register)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={registros.mar}
                            onChange={(e) => setRegistros(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">MBR (Memory Buffer Register)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={registros.mbr}
                            onChange={(e) => setRegistros(e.target.value)}
                        />
                    </div>
                </div>
                <button 
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={processCycle}>
                    Ejecutar Ciclo de Instrucción
                </button>
            </div>
        </div>
    );
};

export default Unidad;