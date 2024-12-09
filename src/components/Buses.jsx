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

    const resetearBuses = useCallback(() => {
        setBuses({
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
    }, []);

    const verificarDatos = useCallback(() => {
        setBuses({
            datos: {
                valor: 1234,
                origen: 'CPU',
                destino: 'Memoria'
            },
            direcciones: {
                valor: '0x1A3F',
                modo: 'Lectura'
            },
            control: {
                señal: 'Transferencia simultánea activa',
                estado: 'Activo'
            }
        });
    }, []);

    return (
        <div className="buses-container space-y-4 max-w-4xl p-4 border border-gray-400 rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800 text-center">Buses del Sistema</h2>
            {/* Bus de Datos */}
            <div className="bus datos border p-4 rounded shadow-md">
                <h3 className="text-lg font-bold text-slate-800">Bus de Datos</h3>
                <p>Valor: {buses.datos.valor || 'N/A'}</p>
                <p>Origen: {buses.datos.origen || 'N/A'}</p>
                <p>Destino: {buses.datos.destino || 'N/A'}</p>

                {/* Formulario para transferencia de datos */}
                <form
                    className="mt-4 flex flex-col gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target;
                        const valor = form.valor.value;
                        const origen = form.origen.value;
                        const destino = form.destino.value;
                        transferirDatos({ valor, origen, destino });
                        form.reset();
                    }}
                >
                    <input
                        name="valor"
                        placeholder="Valor"
                        className="border border-gray-400 rounded px-2 py-1"
                        required
                    />
                    <input
                        name="origen"
                        placeholder="Origen"
                        className="border border-gray-400 rounded px-2 py-1"
                        required
                    />
                    <input
                        name="destino"
                        placeholder="Destino"
                        className="border border-gray-400 rounded px-2 py-1"
                        required
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Transferir Datos</button>
                </form>
            </div>

            {/* Bus de Direcciones */}
            <div className="bus direcciones border p-4 rounded shadow-md">
                <h3 className="text-lg font-bold text-slate-800">Bus de Direcciones</h3>
                <p>Dirección: {buses.direcciones.valor || 'N/A'}</p>
                <p>Modo: {buses.direcciones.modo || 'N/A'}</p>

                {/* Formulario para establecer direcciones */}
                <form
                    className="mt-4 flex flex-col gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target;
                        const direccion = form.direccion.value;
                        const modo = form.modo.value;
                        establecerDireccion(direccion, modo);
                        form.reset();
                    }}
                >
                    <input
                        name="direccion"
                        placeholder="Dirección"
                        className="border border-gray-400 rounded px-2 py-1"
                        required
                    />
                    <select
                        name="modo"
                        className="border border-gray-400 rounded px-2 py-1"
                        required
                    >
                        <option value="Lectura">Lectura</option>
                        <option value="Escritura">Escritura</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Establecer Dirección</button>
                </form>
            </div>

            {/* Bus de Control */}
            <div className="bus control border p-4 rounded shadow-md">
                <h3 className="text-lg font-bold text-slate-800">Bus de Control</h3>
                <p>Señal: {buses.control.señal || 'N/A'}</p>
                <p>Estado: {buses.control.estado || 'N/A'}</p>
            </div>

            {/* Botones adicionales */}
            <div className="text-center mt-4 space-x-4 space-y-2">
                <button
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    onClick={verificarDatos}
                >
                    Verificar Datos Simultáneamente
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={resetearBuses}
                >
                    Reiniciar Buses
                </button>
            </div>
        </div>
    );
};

export default Buses;
