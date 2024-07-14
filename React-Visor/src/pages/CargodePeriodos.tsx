import React, { useState } from 'react';
import '../styles/input.css';

interface Props {
  userType: string; // Tipo de usuario, por ejemplo: "Estudiante", "Profesor"
}

const CargodePeriodos: React.FC<Props> = ({ userType }) => {
  const currentYear = new Date().getFullYear();
  const [periods, setPeriods] = useState([
    { cuatrimestre: '', year: '' },
    { cuatrimestre: '', year: '' },
    { cuatrimestre: '', year: '' },
    { cuatrimestre: '', year: '' },
  ]);

  const handleSelectChange = (index: number, field: string, value: string) => {
    const newPeriods = [...periods];
    newPeriods[index] = { ...newPeriods[index], [field]: value };
    setPeriods(newPeriods);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-between items-center w-full px-5">
        <div className="flex items-center">
          <img 
            src="Logo.png" 
            alt="Universidad Politécnica de Quintana Roo" 
            className="h-10" 
          />
        </div>
        <div className="flex items-center">
          <span className="mr-2">👤</span>
          <span className="font-normal">[Tipo de usuario {userType}]</span>
        </div>
      </div>
      <nav className="w-[90vw] py-3 mb-5">
        <h1>Bienvenido [Tipo de usuario {userType}]</h1>
      </nav>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg mt-8">
        <div className="bg-[#590100] text-white text-xl font-semibold px-4 py-2 rounded-t-lg">
          Carga de periodos
        </div>
        <div className='p-5'>
          <p className="mb-2 text-start pb-5">Selecciona los periodos cuatrimestrales (máximo 4)</p>
          {periods.map((period, index) => (
            <div key={index} className="mb-2 flex justify-between">
              <select
                value={period.cuatrimestre}
                onChange={(e) => handleSelectChange(index, 'cuatrimestre', e.target.value)}
                className="mr-2 p-2 w-[580px] h-[49px] border-2 mb-2"
              >
                <option value="">Cuatrimestre</option>
                <option value="Enero - Abril">Enero - Abril</option>
                <option value="Mayo - Agosto">Mayo - Agosto</option>
                <option value="Septiembre - Diciembre">Septiembre - Diciembre</option>
              </select>
              
              <select
                value={period.year}
                onChange={(e) => handleSelectChange(index, 'year', e.target.value)}
                className="p-2 w-[120px] h-[49px] border-2 mb-2"
              >
                <option value="">Año</option>
                {[...Array(currentYear - 2019 + 1)].map((_, i) => {
                  const year = 2019 + i;  // Mostrar los años desde 2019 hasta el año actual
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
        <button 
          onClick={() => console.log('Cargar archivos')}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Cargar archivos
        </button>
        </div>
        <div className="flex items-center justify-between py-2 w-full px-5">
        <span className="text-gray-600">Mostrando 2 de 3</span>
        <div>
          <button className="text-gray-600 hover:text-gray-800 mx-2">Anterior</button>
          <button className="text-gray-600 hover:text-gray-800 mx-2">Siguiente</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CargodePeriodos;
