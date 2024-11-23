import React, { useState } from 'react';

const Tiempo = () => {
    const [value, setValue] = useState(5);

    const handleChange = (e) => {
        setValue(Number(e.target.value));
    };

    return (
        <div className="fixed bottom-0 left-0 mb-4 ml-4 w-80">
            <div className="flex justify-between mb-2">
                <span>Tiempo de Ejecución (Segundos)</span>
                <span className="font-bold">{value}</span>
            </div>
            <div className="flex items-center">
                <div className="w-full h-2 bg-gray-200 rounded-lg relative">
                    <div className="absolute h-2 bg-blue-500 rounded-lg" style={{ width: `${value * 10}%` }} />
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full" style={{ left: `${value * 10}%`, transform: 'translateX(-50%)' }} />
                </div>
                <input
                type="range"
                min="0"
                max="10"
                value={value}
                onChange={handleChange}
                className="absolute w-full h-2 opacity-0"
                />
            </div>
            <div className="flex justify-between mt-2 text-xs">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
        </div>
    );
};

export default Tiempo;