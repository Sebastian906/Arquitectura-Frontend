import React, { useState } from 'react';

const Buses = () => {
    // Estados para los datos de cada bus
    const [busDatos, setBusDatos] = useState('Datos iniciales');
    const [busDirecciones, setBusDirecciones] = useState('Dirección inicial');
    const [busControl, setBusControl] = useState('Control inicial');

    // Función para manejar cambios en cada bus
    const handleBusChange = (busType, value) => {
        switch (busType) {
            case 'datos':
                setBusDatos(value);
                break;
            case 'direcciones':
                setBusDirecciones(value);
                break;
            case 'control':
                setBusControl(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="buses-container space-y-4">
            {/* Bus de Datos */}
            <div className="bus datos border p-4 rounded shadow-md">
                <h2 className="text-lg font-bold text-slate-800">Bus de Datos</h2>
                <p>{busDatos}</p>
                <input
                    type="text"
                    value={busDatos}
                    onChange={(e) => handleBusChange('datos', e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    placeholder="Actualizar datos del bus"
                />
            </div>

            {/* Bus de Direcciones */}
            <div className="bus direcciones border p-4 rounded shadow-md">
                <h2 className="text-lg font-bold text-slate-800">Bus de Direcciones</h2>
                <p>{busDirecciones}</p>
                <input
                    type="text"
                    value={busDirecciones}
                    onChange={(e) => handleBusChange('direcciones', e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    placeholder="Actualizar dirección del bus"
                />
            </div>

            {/* Bus de Control */}
            <div className="bus control border p-4 rounded shadow-md">
                <h2 className="text-lg font-bold text-slate-800">Bus de Control</h2>
                <p>{busControl}</p>
                <input
                    type="text"
                    value={busControl}
                    onChange={(e) => handleBusChange('control', e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    placeholder="Actualizar control del bus"
                />
            </div>
        </div>
    );
};

export default Buses;
