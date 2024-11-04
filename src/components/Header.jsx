
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAddressCard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

function Header() {
    return (
        <header className="cont-header">
            <div className="container">
                <div className="logo-header">
               <a style={{ textDecoration: 'none' }}    href="/"><p  className="logo">LashandNails</p></a>     
                </div>
                <div className="menu">
                    <FontAwesomeIcon icon={faBars} className="menu-icon" />
                    <p className="header-parrafo"> Categorias </p>
                    <ul className="ul-categorias">
                        <li><a href=""> Press on Nails</a></li>
                        <li><a href="">Esmaltados semis </a></li>
                        <li><a href="">Capping poligel</a></li>
                        <li><a href="">Sistema soft ge</a></li>
                        <li><a href="">Esculpidas en gel</a></li>
                        <li><a href="">Esculpidas en acrilico</a></li>
                        <li><a href="">Capping acrilico</a></li>
                        <li><a href="">cursos</a></li>
                    </ul>

                </div>
                <div className="categorias2">
                    <ul className="ul-categorias2">
                        <li><a href=""> Press on Nails</a></li>
                        <li><a href="">Esmaltados semis </a></li>
                        <li><a href="">Capping poligel</a></li>
                        <li><a href="">Sistema soft gel</a></li>
                        <li id="ver-mas"><a href="#">Ver más </a></li>
                    </ul>
                    <ul id="lista-oculta" className="oculto">
                        <li><a href=""> Press on Nails</a></li>
                        <li><a href="">Esmaltados semis</a></li>
                        <li><a href="">Capping poligel</a></li>
                        <li><a href="">Sistema soft gel</a></li>
                        <li><a href="">Esculpidas en gel</a></li>
                        <li><a href="">Esculpidas en acrílico</a></li>
                        <li><a href="">Capping acrílico</a></li>
                        <li><a href="">Servis</a></li>
                        <li><a href="">cursos</a></li>
                    </ul>
                </div>
                <div className="element">
                    <div className="section-right">
                        <div className="search-container">
                            <form className="search-bar" action="/" method="GET">
                                <input className="buscadorH" type="text" id="searchInput" placeholder="  Buscar Productos ..." name="keywords" />
                                <button id="iconBuscar" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="turnos">
                        <a id="iconTurnos" className="section-right-a" href="/">
                            <FontAwesomeIcon icon={faAddressCard} />

                        </a>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;