import React from 'react'

export default function TotalUsers() {
  return (
    <div className="card border-left-warning shadow h-100 py-2 w-100">
      <div className="card-body">
        <div className="row no-gutters align-items-center justify-content-center"> {/* Añadido justify-content-center para centrar horizontalmente */}
          <div className="col text-center"> {/* Añadido text-center para centrar el contenido */}
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 text-black">USUARIOS REGISTRADOS</div> {/* Añadida clase text-black para color negro */}
            <div className="h5 mb-0 font-weight-bold text-gray-800 text-black">15</div> {/* Añadida clase text-black para color negro */}
          </div>
        </div>
      </div>
      <a  style={{  width:'80%',marginLeft:'30px' }} className="btn btn-dark" target="_blank" rel="nofollow" href=''> Ver </a>
    </div>
  )
}
