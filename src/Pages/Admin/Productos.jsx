import React,{useState, useEffect} from 'react'
import CrearProducto from './CrearProducto';
import TablaProducto from './TablaProducto';

const Productos = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [textButton, setTextButton] = useState("Crear Producto");
  useEffect(() => {
    if (!mostrarFormulario) {
      setTextButton("Crear Producto");
    } else {
      setTextButton("Ver Productos");
    }
  },[mostrarFormulario]);
    return (
        <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col aling-center ">
        <h2 className="text-5xl text-bold text-fuchsia-900 p-3">
          Pagina de Productos
        </h2>
        <button 
          onClick={() => {
            setMostrarFormulario(!mostrarFormulario);
          }}
          className="btn btn-primary aling-center"
        >
          {textButton}
        </button>
      </div>
      <div className="p-3 items-center">
        
        {!mostrarFormulario ? <TablaProducto /> : <CrearProducto />}
      </div>
    </div>
    )
}

export default Productos
