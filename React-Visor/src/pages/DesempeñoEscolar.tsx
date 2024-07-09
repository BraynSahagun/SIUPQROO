// import { Button, Container, ListItem, Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
// import '../assets/styles/Home.css';
import 'tailwindcss/tailwind.css';


const DesempeñoEscolar = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="https://via.placeholder.com/150" // Replace with your image source
            alt="University Logo"
            className="mx-auto"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bienvenido [Tipo de usuario]</h1>
          <h2 className="text-xl font-semibold mb-4">Desempeño escolar</h2>
          <p className="text-gray-700 mb-4">
            Estás a punto de descargar el desempeño de la universidad.
            ¡Esperamos que esta información sea de gran utilidad para ti!
          </p>
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/100" // Replace with your illustration source
              alt="Illustration"
              className="mx-auto mb-4"
            />
          </div>
          <div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full mb-2 w-full hover:bg-orange-600">
              Descargar desempeño Enero - Abril 2020
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full mb-2 w-full hover:bg-orange-600">
              Descargar desempeño Mayo - Agosto 2020
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full w-full hover:bg-orange-600">
              Descargar desempeño Enero - Abril 2021
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DesempeñoEscolar;
