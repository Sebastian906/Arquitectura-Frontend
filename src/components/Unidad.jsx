import React, { useState } from 'react';

const Unidad = () => {
    const [alu, setAlu] = useState(''); // ALU: Realiza operaciones aritméticas y lógicas
    const [br, setBr] = useState('');
    const [pc, setPc] = useState('');
    const [ir, setIr] = useState('');
    const [uc, setUc] = useState('');
    const [mar, setMar] = useState('');
    const [mbr, setMbr] = useState('');

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
                            value={alu}
                            onChange={(e) => setAlu(e.target.value)}
                        />
                    </div>

                    {/* Bloques BR y PC */}
                    <div className="flex justify-between mt-8 w-full">
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-medium text-gray-700 mb-1">BR</label>
                            <input
                                type="text"
                                className="p-2 border rounded-lg w-24 text-sm"
                                value={br}
                                onChange={(e) => setBr(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-medium text-gray-700 mb-1">PC</label>
                            <input
                                type="text"
                                className="p-2 border rounded-lg w-24 text-sm"
                                value={pc}
                                onChange={(e) => setPc(e.target.value)}
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
                            value={ir}
                            onChange={(e) => setIr(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">UC (Unidad de Control)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={uc}
                            onChange={(e) => setUc(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">MAR (Memory Address Register)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={mar}
                            onChange={(e) => setMar(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">MBR (Memory Buffer Register)</label>
                        <input
                            type="text"
                            className="p-2 border rounded-lg w-full text-sm"
                            value={mbr}
                            onChange={(e) => setMbr(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unidad;