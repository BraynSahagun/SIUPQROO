import InterfaceModel from './interfaceModel';
import img from '../../public/image1.png';


const HomeDirectCar = () => {
  const periodos = [
    { nombre:"Enero - Abril 2020", pk:1 },
    { nombre:"Enero - Abril 2022", pk:2 },
    { nombre:"Enero - Abril 2023", pk:3 }
  ];

  return (
    <InterfaceModel
      userType="Administrador"
      titleSection="Desempeño escolar"
      titleAction="Estás a punto de descargar los indicadores de la universidad."
      subtitleAction="¡Esperamos que esta información sea de gran utilidad para ti!"
      contenido={
        <>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <img 
              src={img}
              className="w-{100%] md:w-{800px] h-auto" 
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center p-5">
            {periodos.map((item) => (
              <button key={item.pk} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 m-1 md:m-6 rounded-full  w-[60%]">
                Descargar desempeño {item.nombre}
              </button>
            ))}
          </div>
        </div>
        </>
      }
    />
  );
};

export default HomeDirectCar;