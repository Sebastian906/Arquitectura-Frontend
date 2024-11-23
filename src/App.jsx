import React from 'react'
import Titulo from './components/Titulo'
import Unidad from './components/Unidad'
import MemoriaP from './components/MemoriaP'
import MDatos from './components/MDatos'
import Instrucciones from './components/Instrucciones'

const App = () => {
  return (
    <div className="bg-indigo-100 min-h-screen p-4">
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
        {/* Tercera columna */}
        <div className="flex-1">
          <Instrucciones />
        </div>
      </div>
    </div>
  );
}

export default App