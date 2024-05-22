import React from 'react';
import AvailableCalendar from './ReservationForm2';


export default function Availability() {
  return (
    <div className="card border-left-warning shadow h-100 py-2 w-100">
      <div className="card-body">
        <div className="row no-gutters align-items-center justify-content-center">
          <div className="col text-center">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">HORARIOS</div>
            
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '100%', margin: 'auto' }}> {/* Ajustar el contenedor */}
              <AvailableCalendar />
            </div>
      <a style={{ width: '80%', marginLeft: '30px' }} className="btn btn-dark" target="_blank" rel="nofollow" href=''> Editar </a>
    </div>
  );
}