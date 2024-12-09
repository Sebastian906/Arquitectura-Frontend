import React, { useCallback, useState } from 'react';

const Buses = () => {
    const [buses, setBuses] = useState({
        datos: {
            valor: null,
            origen: null,
            destino: null
        },
        direcciones: {
            valor: null,
            modo: null
        },
        control: {
            señal: null,
            estado: null
        }
    });

    const transferirDatos = useCallback((config) => {
        setBuses(prev => ({
            ...prev,
            datos: {
                valor: config.valor,
                origen: config.origen,
                destino: config.destino
            },
            control: {
                señal: `Transferencia ${config.origen} -> ${config.destino}`,
                estado: 'Activo'
            }
        }));
    }, []);

    const establecerDireccion = useCallback((direccion, modo) => {
        setBuses(prev => ({
            ...prev,
            direcciones: {
                valor: direccion,
                modo: modo
            }
        }));
    }, []);

    return (
        <div className="buses-container space-y-4 max-w-4xl p-4 border border-gray-400 rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800 text-center">Buses del Sistema</h2>
            <div className="bus datos border p-4 rounded shadow-md">
                <h3 className="text-lg font-bold text-slate-800">Bus de Datos</h3>
                <p>Valor: {buses.datos.valor}</p>
                <p>Origen: {buses.datos.origen}</p>
                <p>Destino: {buses.datos.destino}</p>
            </div>
            <div className="bus direcciones border p-4 rounded shadow-md">
                <h3 className="text-lg font-bold text-slate-800">Bus de Direcciones</h3>
                <p>Dirección: {buses.direcciones.valor}</p>
                <p>Modo: {buses.direcciones.modo}</p>
            </div>
            <div className="bus control border p-4 rounded shadow-md">
                <h3 className="text-lg font-bold text-slate-800">Bus de Control</h3>
                <p>Señal: {buses.control.señal}</p>
                <p>Estado: {buses.control.estado}</p>
            </div>
        </div>
    );
};

export default Buses;
