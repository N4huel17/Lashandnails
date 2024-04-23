import '../styles/Footer.css'
import ContactFooter from '../components/home/ContactFooter'

import RedesSc from './home/RedesSc'


export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <section className='nav-footer'>
          <h3 className='h-nav' style={{ color: 'white', marginLeft: '10px' }}>Navegación</h3>
          <ul className="ul-footer" style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="">Press on Nails</a></li>
            <li><a href="">Esmaltados semis</a></li>
            <li><a href="">Capping poligel</a></li>
            <li><a href="">Sistema soft gel</a></li>
            <li><a href="">Esculpidas en gel</a></li>
            <li><a href="">Esculp en acrílico</a></li>
            <li><a href="">Capping acrílico</a></li>
            <li><a href="">cursos</a></li>
          </ul>
        </section>
        <section className='contacto'>
          <ContactFooter />
        </section>
        <RedesSc/>
      </div>
     
    </div>
  )
}