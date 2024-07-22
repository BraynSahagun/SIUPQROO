import { useState } from 'react';
import InterfaceModel from './interfaceModel';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';

// Ejemplo de datos simulados (puedes obtener estos datos de tu API)
const DatosACargar = [
  { archivo: 'DPERIO.DBF' },
  { archivo: 'DGRUPO.DBF' },
  { archivo: 'DLISTA.DBF' },
  { archivo: 'DMATER.DBF' },
  { archivo: 'DCARRE.DBF' },
  { archivo: 'DALUMN.DBF' },
  { archivo: 'DPERSO.DBF' },
];

const CargarDatos = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState({});
  const [fileErrors, setFileErrors] = useState({});

  const handleNavigateCargarperiodos = () => {
    navigate('/CargaPeriodos');
  };

  const handleFileChange = (event, archivo) => {
    const file = event.target.files[0];
    if (file && file.name === archivo) {
      setSelectedFiles(prevState => ({
        ...prevState,
        [archivo]: file
      }));
      setFileErrors(prevState => ({
        ...prevState,
        [archivo]: null
      }));

      console.log(selectedFiles)
    } else {
      setFileErrors(prevState => ({
        ...prevState,
        [archivo]: `El archivo seleccionado no coincide con ${archivo}`
      }));
    }
  }

  const handleUploadFiles = async () => {
    const formData = new FormData();
    Object.keys(selectedFiles).forEach(archivo => {
      formData.append('myFile', selectedFiles[archivo]);
    });

    try {
      const response = await instance.post('/api/dbf/load', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.estado) {
        console.log(response.data);
        alert('Archivos cargados correctamente');
      } else {
        console.error('Error al cargar los archivos');
        alert('Error al cargar los archivos');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud', error);
      alert('Error al realizar la solicitud');
    }
  }

  return (
    <InterfaceModel
      userType="Administrador"
      titleSection="Cargar datos"
      titleAction="Sube los archivos DBF"
      subtitleAction=""
      contenido={
        <>
          <div className='flex flex-col md:flex-col justify-between p-5 overflow-scroll max-h-[25rem]'>
            {DatosACargar.map((dato, index) => (
              <>
                <div key={index} className="flex flex-row items-center my-2">
                  <h1 className="mr-1">Archivo</h1>
                  <h1 className="font-bold">{dato.archivo}</h1>
                </div>
                <div className='flex flex-row items-center justify-between bg-gray-200'>
                  <label className="bg-[#ec6b0c] w-[30%] text-center font-medium rounded-xl mx-4 my-2 cursor-pointer">
                    <span>Eaxaminar</span>
                    <input type="file" className="hidden" onChange={(e) => handleFileChange(e, dato.archivo)} />
                  </label>
                  <h1 className='font-medium'>{selectedFiles[dato.archivo] ? selectedFiles[dato.archivo].name : 'No se ha seleccionado ningún archivo'}</h1>
                  {/* {fileErrors[dato.archivo] && (
                    <p className="text-red-500">{fileErrors[dato.archivo]}</p>
                  )} */}
                </div>
                <div className="flex items-center justify-between py-2 w-full px-5">
                </div>
              </>
            ))}
          </div>

          <div className="flex items-center justify-between py-2 w-full px-5">
            <span className="text-gray-600">Mostrando 1 de 3</span>
            <div>
              <button className="text-gray-600 mx-2 cursor-default">Anterior</button>
              <button onClick={handleNavigateCargarperiodos} className="text-gray-600 hover:text-gray-800 mx-2">Siguiente</button>
            </div>
          </div>
        </>
      }
    />
  );
};

export default CargarDatos;
