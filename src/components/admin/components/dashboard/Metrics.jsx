
import TotalServicios from './TotalServicios'
import TotalUsers from './TotalUsers'
import Citas from './Citas'

export default function Metrics() {
    return (
        <div className="row">
    
        <div className="col-md-4 mb-4">
           <TotalServicios/>
        </div>
    
        <div className="col-md-4 mb-4">
        <TotalUsers/>
        </div>
    
        <div className="col-md-4 mb-4">
        <Citas/>
        </div>
    </div>
      )
}
