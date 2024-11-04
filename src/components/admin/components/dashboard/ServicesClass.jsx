
import PropTypes from 'prop-types';
import ServiCard from './ServiCard';
import '../../public/css/admin.css'; // Asegúrate de tener tu archivo CSS personalizado

const ServicesClass = ({ servicios }) => {
  return (
    
    <div className="services-container">
      <div className="services-header">
        <h5 className="font-weight-bold text-gray-800">Servicios</h5>
      </div>
      <div className="services-grid">
        {servicios.map((servicio) => (
          <ServiCard key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </div>
  );
};

ServicesClass.propTypes = {
  servicios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      mainImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicesClass;