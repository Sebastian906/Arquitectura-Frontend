import React, { useState } from 'react';
import { useCallback } from 'react';

const MemoriaRAM = () => {
    const [memoria, setMemoria] = useState({
        datos: new Array(256).fill(null).map(() => ({
            valor: Math.floor(Math.random() * 256),
            direccion: null
        })),
        programa: []
    });

    const escribirDato = useCallback((direccion, valor) => {
        if (direccion < 0 || direccion > 255) {
            console.error('Dirección fuera de rango');
            return;
        }

        setMemoria(prev => {
            const nuevosDatos = [...prev.datos];
            nuevosDatos[direccion] = { 
                valor, 
                direccion 
            };
            return { ...prev, datos: nuevosDatos };
        });
    }, []);

    const leerDato = useCallback((direccion) => {
        if (direccion < 0 || direccion > 255) {
            console.error('Dirección fuera de rango');
            return null;
        }
        return memoria.datos[direccion];
    }, [memoria]);

    const agregarInstruccionPrograma = useCallback((instruccion) => {
        setMemoria(prev => ({
            ...prev,
            programa: [...prev.programa, instruccion]
        }));
    }, []);

    return (
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Memoria RAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Segmento de Datos</h3>
                {memoria.datos.filter(dato => dato.valor !== null).map((dato, index) => (
                    <div key={index}>
                        Dirección {index}: {dato.valor}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Segmento de Programa</h3>
                {memoria.programa.map((instruccion, index) => (
                    <div key={index}>{instruccion}</div>
                ))}
            </div>
        </div>
    );
};

export default MemoriaRAM;
