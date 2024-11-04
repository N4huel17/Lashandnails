
import PropTypes from 'prop-types';
import '../../public/css/admin.css'

const ServiCard = ({ servicio }) => {
  return (
    <div className='servi-card'>
      
        <div >
          {servicio.name}
        </div>
      
    </div>
  );
};

ServiCard.propTypes = {
  servicio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiCard;