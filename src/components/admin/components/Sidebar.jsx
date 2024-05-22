import React from 'react';
import logo from '../public/img/logo.jpg';
import '../public/css/admin.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

export default function Sidebar() {
    return (
        <ul className="navbar-nav sidebar accordion col-md-auto" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100 img-fluid" style={{maxWidth: "100px"}} src={logo} alt="logo" />
                </div>
            </a>
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <span style={{fontWeight: "bolder", padding: '5px'}}>LashandNails - Dashboard</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <a className="nav-link collapsed" href="/products">
                    <span className='sidebar-text'>Servicios</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/clientes">
                    <span className='sidebar-text'>Clientes</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/encargos">
                    <span className='sidebar-text'>Citas</span>
                </a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}