
import Metrics from './dashboard/Metrics';
import Availability from './dashboard/Availability';
import ServicesClass from './dashboard/ServicesClass';
import Services from '../../data/Services';
import '../public/css/admin.css'; // Asegúrate de tener tu archivo CSS personalizado

export default function DashboardComponent() {
  return (
    <div className="container">
      {/* Metrics arriba */}
      <Metrics />

      {/* Contenedor para horarios y servicios */}
      <div className="container-half">
        {/* Horarios */}
        <div className="availability-container">
          <Availability className="horarios" />
        </div>

        {/* Servicios */}
        
          <ServicesClass servicios={Services} />
        
      </div>
    </div>
  );
}