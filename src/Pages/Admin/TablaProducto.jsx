import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import obtenerProductos from '../../api'

const TablaProducto = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [consulta, setConsulta] = useState(true);
    const [search, setSearch] = useState("");
    const [productsFilter, setProductsFilter] = useState(product);
  
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
  
        await obtenerProductos(
          (res) => {
            console.log("Datos recibidos", res);
            setProduct(res.data);
            setLoading(false);
            setConsulta(false);
          },
          (err) => {
            console.error("error", err);
            setLoading(false);
          }
        );
      };
      console.log("consulta", consulta);
      
      if (consulta) {
        fetchProducts();
      }
    }, [consulta]);
  
    useEffect(() => {
      setProductsFilter(
        product.filter((element) => {
          return JSON.stringify(element)
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      );
    }, [search, product]);
    return (
        <div>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre del Producto</th>
      <th>Descripción</th>
      <th>Costo</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
  {product.map((el) => {
          return (
            
              <tr key={el._id}>
              <td>{el._id.slice(20)}</td>
              <td>{el.Nameproducto}</td>
              <td>{el.descripcion}</td>
              <td>{( el.costo)}</td>
              <td>{el.estado}</td>
              <td>{}</td>
              </tr>
            
          );
        })}
    
  </tbody>
</Table>
        </div>
    )
}

export default TablaProducto
