import React, { useState } from 'react';

const Unidad = () => {
    const [unidad1, setUnidad1] = useState('');
    const [unidad2, setUnidad2] = useState('');
    const [unidad3, setUnidad3] = useState('');
    const [unidad4, setUnidad4] = useState('');
    const [acumulador, setAcumulador] = useState('');
    const [contador, setContador] = useState('');
    const [unidadDeControl, setUnidadDeControl] = useState('');

    return (
        <div className="max-w-lg mx-auto p-4 border border-gray-400 rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800 text-center">Unidad Central de Procesamiento</h2>
            <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Unidad Aritmética Lógica</label>
                        <div className="flex">
                            <input
                                type="text"
                                className="w-1/2 p-2 border border-gray-400 rounded-lg mr-2"
                                value={unidad1}
                                onChange={(e) => setUnidad1(e.target.value)}
                            />
                            <input
                                type="text"
                                className="w-1/2 p-2 border border-gray-400 rounded-lg"
                                value={unidad2}
                                onChange={(e) => setUnidad2(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col items-center mt-4">
                            <input
                                type="text"
                                className="w-1/2 p-2 border border-gray-400 rounded-lg mb-2"
                                value={unidad3}
                                onChange={(e) => setUnidad3(e.target.value)}
                            />
                            <input
                                type="text"
                                className="w-1/2 p-2 border border-gray-400 rounded-lg"
                                value={unidad4}
                                onChange={(e) => setUnidad4(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Acumulador</label>
                        <input
                        type="text"
                        className="p-2 border border-gray-400 rounded-lg w-full"
                        value={acumulador}
                        onChange={(e) => setAcumulador(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contador</label>
                        <input
                        type="text"
                        className="p-2 border border-gray-400 rounded-lg w-full"
                        value={contador}
                        onChange={(e) => setContador(e.target.value)}
                        />
                    </div>
                </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Unidad de Control</label>
                <input
                    type="text"
                    className="p-2 border border-gray-400 rounded-lg w-full"
                    value={unidadDeControl}
                    onChange={(e) => setUnidadDeControl(e.target.value)}
                />
            </div>
        </div>
    </div>
    );
};

export default Unidad;