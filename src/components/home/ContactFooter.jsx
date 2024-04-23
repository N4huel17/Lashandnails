import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ContactFooter() {

    return (
        <div className='contact' style={{ marginLeft: '30px' }}>
            <h3 className='h-nav' style={{ color: 'white', marginLeft: '3px',marginTop: '5px'  }} >Contacto</h3>
            <div className="footer__contacto">
                <FontAwesomeIcon style={{ color: 'white' }} icon={faPhone} />
                <a style={{ color: 'white', textDecoration: 'none' }} href="tel:+549116416625">+549116416625</a>
            </div>

            <nav className="footer_ubicacion" style={{ color: 'white' }} >
                <div style={{ display: 'flex' }} >
                    <FontAwesomeIcon style={{ fontSize: '5px' }} icon={faLocationDot} />
                    <h1 className='direct' >AV. PRESIDENTE PERON 1552, SAN MIGUEL</h1>
                </div>

                <iframe className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.4400226623607!2d-58.71397638902054!3d-34.542412754149865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0d82cd413d%3A0x16dc70989eb64065!2sAv.%20Pte.%20J.%20D.%20Per%C3%B3n%201552%2C%20B1663GHR%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700012414706!5m2!1ses-419!2sar"
                    width="50%"
                    height="50"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"

                ></iframe>
            </nav>
        </div>


    )

}

