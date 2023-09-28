import React, { useEffect, useState } from 'react';
import PartList from './PartList'; // Importa el componente de la lista de partes
import { Link } from 'react-router-dom';

const PartListPage = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos del archivo JSON (datos.json)
    // y actualiza el estado "parts" con los datos.
    // Esto se debe hacer en una función asincrónica.
    async function fetchData() {
      try {
        const response = await fetch('datos.json'); // Reemplaza '/ruta-a-tu-archivo-json/datos.json' con la ruta correcta
        const data = await response.json();
        setParts(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Partes Disponibles</h2>
      <PartList parts={parts} />
      <Link to="/parts/detail/:id">Ver Detalles</Link>
    </div>
  );
};

export default PartListPage;

