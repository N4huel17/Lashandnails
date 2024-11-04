// src/components/Body.js

import { useEffect, useState } from 'react';
import '../styles/Body.css';
import portada from '../styles/img/portada.jpg';
import Card from './home/Card';
import { getServices } from '../services/service';

export default function Body() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        console.log("Fetched services:", data); // Verificar la estructura de data
        if (data && Array.isArray(data.services)) {
          setServices(data.services);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError("Error fetching services");
        console.error("Error setting services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const servicesList = services.map((s) => {
    // Obtiene la URL de la primera imagen del array, si existe
    const mainImage = s.images && s.images.length > 0 ? s.images[0].image_path : "";

    return (
      <Card 
        key={s.id} 
        id={s.id} 
        name={s.name}  
        price={s.price} 
        description={s.description} 
        mainImage={mainImage} // Pasa la primera imagen
      />
    );
  });

  return (
    <div>
      <div className="home_main-portada">
        <img src={portada} alt=""/>
      </div>

      <section id="servicios">
        <div className="container">
          <h2 style={{ marginLeft: '120px', marginTop: '20px' }}>Servicios</h2>
          <div className="cartelitos">
            {servicesList}
          </div>
        </div>
      </section>
    </div>
  );
}