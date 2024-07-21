import { useState, useEffect } from 'react';

import type { IDirector } from '../Interfaces/roles.d.ts';

type props = {
  rol: IDirector;
};

const saveToLocalStorage = (key: any, value: any) => {
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key: any) => {
  return localStorage.getItem(key);
};

const VistaPrueba: React.FC<props> = ({ rol }) => {
  const [buttonState, setButtonState] = useState(
    getFromLocalStorage('buttonState') || 'Estado 1'
  );

  useEffect(() => {
    saveToLocalStorage('buttonState', buttonState);
  }, [buttonState]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-xl font-bold">Estado Actual: {buttonState}</h1>
      <h1 className="mb-4 text-xl font-bold">{rol.Director} </h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => setButtonState('Estado 1')}>
          Estado 1
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          onClick={() => setButtonState('Estado 2')}>
          Estado 2
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
          onClick={() => setButtonState('Estado 3')}>
          Estado 3
        </button>
      </div>
    </div>
  );
};

export default VistaPrueba;
