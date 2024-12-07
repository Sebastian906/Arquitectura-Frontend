import React from 'react'
import Titulo from './components/Titulo'
import Unidad from './components/Unidad'
import MemoriaP from './components/MemoriaP'
import MDatos from './components/MDatos'
import Instrucciones from './components/Instrucciones'
import Boton from './components/Boton'
import Tiempo from './components/Tiempo'
import Buses from './components/Buses'

const App = () => {
  return (
    <div className="bg-indigo-100 min-h-screen p-4 relative">
      <Titulo />
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* Primera columna */}
        <div className="flex-1 flex flex-col gap-4">
          <Unidad />
          <MemoriaP />
        </div>
        {/* Segunda columna */}
        <div className="flex-1">
          <MDatos />
        </div>
        <div className='flex-1'>
          <Buses />
        </div>
        {/* Tercera columna */}
        <div className="flex-1">
          <Instrucciones />
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