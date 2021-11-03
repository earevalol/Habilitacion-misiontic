import axios from "axios";

const baseURL = "http://localhost:4000";

const eRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
  };
  
  //Crud de Productos
  
 const obtenerProductos = async (resCallback, errCallback) => {
    const options = {
      method: "GET",
      url: `${baseURL}/products`,
     
    };
    await eRequest(options, resCallback, errCallback);
  };

  const crearProductos = async (resCallback, errCallback) => {
    const options = {
      method: "POST",
      url: `${baseURL}/products`,
      data:{},
    };
    await eRequest(options, resCallback, errCallback);
  };
  export default {obtenerProductos, crearProductos}