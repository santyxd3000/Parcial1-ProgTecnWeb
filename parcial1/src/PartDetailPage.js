import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PartDetailPage = () => {
  const { id } = useParams();
  const [part, setPart] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET para obtener los detalles de la parte con la ID proporcionada
    // y actualiza el estado "part" con los datos.
    // Esto se debe hacer en una función asincrónica.
    async function fetchPartDetails() {
      try {
        const response = await fetch(`/datos.json`); // Reemplaza '/ruta-a-tu-archivo-json/datos.json' con la ruta correcta
        const data = await response.json();
        const selectedPart = data.find((part) => part.id === id);
        setPart(selectedPart);
      } catch (error) {
        console.error('Error al obtener detalles de la parte:', error);
      }
    }

    fetchPartDetails();
  }, [id]);

  return (
    <div className="container mt-5">
      {part ? (
        <div>
          <h2>Detalles de la Parte</h2>
          <div>
            <h3>{part.carMaker}</h3>
            <p>Modelo: {part.carModel}</p>
            <p>Año: {part.carYear}</p>
            <p>Precio: ${part.price}</p>
          </div>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default PartDetailPage;



