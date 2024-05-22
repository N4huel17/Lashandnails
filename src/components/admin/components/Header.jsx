import React from 'react'

export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg "  style={{backgroundColor: '#f1739b'}} data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LashandNails</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/productos">Servicios</a></li>
                                <li><a className="dropdown-item" href="/clientes">Registro de Clientes</a></li>
                                <li><a className="dropdown-item" href="/encargos">Citas</a></li>
                            </ul>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )
}
