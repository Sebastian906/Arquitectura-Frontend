import React, { useCallback, useState } from 'react';

const Boton = () => {
    const [estado, setEstado] = useState({
        ciclo: 'DETENIDO',
        instruccionActual: null,
        tiempoEjecucion: 0
    });

    const ejecutarCiclo = useCallback(() => {
        setEstado(prev => ({
            ciclo: 'EJECUTANDO',
            instruccionActual: 'Ciclo de instrucción',
            tiempoEjecucion: prev.tiempoEjecucion + 1
        }));

        // Simular ciclo de instrucción
        setTimeout(() => {
            setEstado(prev => ({
                ciclo: 'COMPLETADO',
                instruccionActual: null,
                tiempoEjecucion: prev.tiempoEjecucion
            }));
        }, 1000);
    }, []);

    return (
        <div>
            <button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                onClick={ejecutarCiclo}>Ejecutar</button>
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-200 text-center p-4 rounded-lg shadow-lg">
                <p className='font-bold'>Estado: {estado.ciclo}</p>
                <p>Instrucción: {estado.instruccionActual || 'N/A'}</p>
                <p>Tiempo: {estado.tiempoEjecucion} s</p>
            </div>
        </div>
    );
};

export default Boton;