import React from 'react'
import Titulo from './components/Titulo'
import Unidad from './components/Unidad'
import DispositivosIO from './components/DispositivosIO'
import MemoriaP from './components/MemoriaP'
import MDatos from './components/MDatos'
import Instrucciones from './components/Instrucciones'
import Buses from './components/Buses'
import MemoriaRAM from './components/MemoriaRAM'
import Boton from './components/Boton'
import Tiempo from './components/Tiempo'

const App = () => {

  // Función para obtener dispositivos iniciales
  const obtenerEntrada = () => ['Teclado', 'Mouse'];
  const obtenerSalida = () => ['Monitor', 'Impresora'];

  // Función para agregar un dispositivo nuevo
  const agregarDispositivo = (tipo) => {
    const nuevoDispositivo = prompt(`Ingrese un nuevo dispositivo de ${tipo}:`);
    return nuevoDispositivo || `Dispositivo Desconocido (${tipo})`;
  };

  return (
    <div className="bg-indigo-100 min-h-screen p-4 relative">
      <Titulo />
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* Primera columna */}
        <div className="flex-1 flex flex-col gap-4">
          <Unidad />
          {/* Componente DispositivosIO */}
          <DispositivosIO
            obtenerEntrada={obtenerEntrada}
            obtenerSalida={obtenerSalida}
            agregarDispositivo={agregarDispositivo}
          />
          <MemoriaP />
        </div>
        {/* Segunda columna */}
        <div className="flex-1 flex flex-col gap-4">
          <MDatos />
          <Instrucciones />
        </div>
        {/* Tercera columna */}
        <div className="flex-1 flex flex-col gap-4">
          <Buses />
          <MemoriaRAM />
        </div>
      </div>
      {/* Contenedor para Tiempo y Boton */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-10 bg-indigo-100 shadow-md">
        <Tiempo />
        <Boton />
      </div>
    </div>
  );
};

export default App