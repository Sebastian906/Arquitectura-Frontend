import React, { useCallback, useEffect, useState } from 'react';

const DispositivosIO = () => {
    const [dispositivos, setDispositivos] = useState({
        entrada: [],
        salida: []
    });

    const [nuevoDispositivo, setNuevoDispositivo] = useState('');
    const [tipoDispositivo, setTipoDispositivo] = useState('entrada');

    // Cargar datos desde Local Storage al iniciar
    useEffect(() => {
        const dispositivosGuardados = JSON.parse(localStorage.getItem('dispositivosIO')) || {
            entrada: [],
            salida: []
        };
        setDispositivos(dispositivosGuardados);
    }, []);

    // Guardar datos en Local Storage al actualizar
    useEffect(() => {
        localStorage.setItem('dispositivosIO', JSON.stringify(dispositivos));
    }, [dispositivos]);

    // Función para agregar dispositivos
    const agregarDispositivo = useCallback(() => {
        if (!nuevoDispositivo.trim()) return;

        setDispositivos(prev => ({
            ...prev,
            [tipoDispositivo]: [
                ...prev[tipoDispositivo],
                {
                    nombre: nuevoDispositivo.trim(),
                    estado: 'No conectado',
                    ultimaTransferencia: null
                }
            ]
        }));
        setNuevoDispositivo(''); // Limpiar campo de texto
    }, [nuevoDispositivo, tipoDispositivo]);

    // Función para verificar conexión
    const verificarConexion = useCallback((tipo, dispositivo) => {
        setDispositivos(prev => ({
            ...prev,
            [tipo]: prev[tipo].map(dev =>
                dev.nombre === dispositivo ? { ...dev, estado: 'Conectado' } : dev
            )
        }));
    }, []);

    // Función para transferir datos
    const transferirDatos = useCallback((tipo, dispositivo, datos) => {
        setDispositivos(prev => ({
            ...prev,
            [tipo]: prev[tipo].map(dev =>
                dev.nombre === dispositivo
                    ? { ...dev, ultimaTransferencia: datos }
                    : dev
            )
        }));
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4 border border-gray-400 rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Dispositivos de I/O</h2>

            {/* Formulario para agregar dispositivos */}
            <div className="mb-4 flex gap-4 items-center">
                <select
                    className="border border-gray-400 rounded px-2 py-1"
                    value={tipoDispositivo}
                    onChange={(e) => setTipoDispositivo(e.target.value)}
                >
                    <option value="entrada">Dispositivo de Entrada</option>
                    <option value="salida">Dispositivo de Salida</option>
                </select>
                <input
                    type="text"
                    className="border border-gray-400 rounded px-2 py-1 flex-1"
                    placeholder="Nombre del dispositivo"
                    value={nuevoDispositivo}
                    onChange={(e) => setNuevoDispositivo(e.target.value)}
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={agregarDispositivo}
                >
                    Agregar Dispositivo
                </button>
            </div>

            {/* Tabla de Dispositivos de Entrada */}
            <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700">Dispositivos de Entrada</h3>
                <table className="table-auto border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Nombre</th>
                            <th className="border border-gray-400 px-4 py-2">Estado</th>
                            <th className="border border-gray-400 px-4 py-2">Última Transferencia</th>
                            <th className="border border-gray-400 px-4 py-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dispositivos.entrada.map((dev, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{dev.nombre}</td>
                                <td className="border border-gray-400 px-4 py-2">{dev.estado}</td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {dev.ultimaTransferencia || 'N/A'}
                                </td>
                                <td className="border border-gray-400 px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => verificarConexion('entrada', dev.nombre)}
                                        disabled={dev.estado === 'Conectado'}
                                    >
                                        {dev.estado === 'Conectado' ? 'Conectado' : 'Verificar'}
                                    </button>
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded"
                                        onClick={() =>
                                            transferirDatos('entrada', dev.nombre, `Dato-${Date.now()}`)
                                        }
                                        disabled={dev.estado !== 'Conectado'}
                                    >
                                        Transferir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tabla de Dispositivos de Salida */}
            <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700">Dispositivos de Salida</h3>
                <table className="table-auto border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Nombre</th>
                            <th className="border border-gray-400 px-4 py-2">Estado</th>
                            <th className="border border-gray-400 px-4 py-2">Última Transferencia</th>
                            <th className="border border-gray-400 px-4 py-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dispositivos.salida.map((dev, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{dev.nombre}</td>
                                <td className="border border-gray-400 px-4 py-2">{dev.estado}</td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {dev.ultimaTransferencia || 'N/A'}
                                </td>
                                <td className="border border-gray-400 px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => verificarConexion('salida', dev.nombre)}
                                        disabled={dev.estado === 'Conectado'}
                                    >
                                        {dev.estado === 'Conectado' ? 'Conectado' : 'Verificar'}
                                    </button>
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded"
                                        onClick={() =>
                                            transferirDatos('salida', dev.nombre, `Dato-${Date.now()}`)
                                        }
                                        disabled={dev.estado !== 'Conectado'}
                                    >
                                        Transferir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DispositivosIO;