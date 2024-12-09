import React, { useCallback, useState } from 'react';

const DispositivosIO = ({ obtenerEntrada, obtenerSalida }) => {
    const [dispositivos, setDispositivos] = useState({
        entrada: [],
        salida: []
    });

    const agregarDispositivo = useCallback((tipo, dispositivo) => {
        setDispositivos(prev => ({
            ...prev,
            [tipo]: [...prev[tipo], {
                nombre: dispositivo,
                estado: 'Conectado',
                ultimaTransferencia: null
            }]
        }));
    }, []);

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
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Dispositivos de I/O</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <div className='flex-1'>
                    <h3 className="text-md font-semibold text-gray-700">Dispositivos de Entrada</h3>
                    {dispositivos.entrada.map((dev, index) => (
                        <div key={index}>
                            {dev.nombre} - {dev.estado}
                            Última transferencia: {dev.ultimaTransferencia || 'N/A'}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className='flex-1'>
                    <h3 className="text-md font-semibold text-gray-700">Dispositivos de Salida</h3>
                    {dispositivos.salida.map((dev, index) => (
                        <div key={index}>
                            {dev.nombre} - {dev.estado}
                            Última transferencia: {dev.ultimaTransferencia || 'N/A'}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DispositivosIO;