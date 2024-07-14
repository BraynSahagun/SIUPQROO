import React from 'react';

interface Props {
  userType: string;
}

const Estatus: React.FC<Props> = ({ userType }) => {
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
        <div className="bg-[#550101] text-white text-xl font-semibold px-4 py-2 rounded-t-lg">
          Estatus
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-800">
            Verifica que tus archivos estén correctos
          </p>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 text-left">Periodo</th>
                <th className="py-2 text-left">Año</th>
                <th className="py-2 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2">Enero - Abril</td>
                <td className="py-2">2020</td>
                <td className="py-2">
                  <span className="text-green-500">✔️</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">Mayo - Agosto</td>
                <td className="py-2">2020</td>
                <td className="py-2">
                  <span className="text-green-500">✔️</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">Septiembre - Diciembre</td>
                <td className="py-2">2020</td>
                <td className="py-2">
                  <span className="text-red-500">❌</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">Enero - Abril</td>
                <td className="py-2">2021</td>
                <td className="py-2">
                  <span className="text-green-500">✔️</span>
                </td>
              </tr>
            </tbody>
          </table> 
          <div className="flex justify-center mt-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Confirmar
            </button>
          </div>
          <div className="flex items-center justify-between py-2 w-full px-5">
                <span className="text-gray-600">Mostrando 3 de 3</span>
              <div>
                <button className="text-gray-600 hover:text-gray-800 mx-2">Anterior</button>
                <button className="text-gray-600 hover:text-gray-800 mx-2">Siguiente</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Estatus;
