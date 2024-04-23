import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function RedesSc() {
  return (
    <div className="redes_sociales_del_footer" style={{ color: 'white' }}>
      <h4>REDES SOCIALES</h4>
      <br />
      <div className="redes_sociales_del_footer">
        <span className="instagram">
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </a>
        </span>
        <span className="facebook">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </a>
        </span>
        <span className="tiktok">
          <a href="https://www.tiktok.com/es/">
            <FontAwesomeIcon icon={faTiktok} className="tiktok-icon" />
          </a>
        </span>
        <span className="whatsapp">
          <a href="https://api.whatsapp.com/send?phone=yourphonenumber">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          </a>
        </span>
      </div>
    </div>
  );
}