
import instagram from '../../styles/img/instagram.svg';
import facebook from '../../styles/img/facebook.svg';
import whatsapp from '../../styles/img/whatsapp.svg';
import tiktok from '../../styles/img/tiktok.svg';

export default function RedesSc() {
  return (
    <div className="redes_sociales_del_footer1" style={{ color: 'white' }}>
      <h3 className='h-redes'style={{  marginLeft: '-20px' }} >REDES SOCIALES</h3>
      <br />
      <div className="redes_sociales_del_footer">
        <span className="icons">
          <a href="https://www.instagram.com/lashandnails_?igsh=MW15c2VkYWd4bmQ5dg==">
            <img src={instagram} alt="Instagram" className="redesIcon" />
          </a>
        </span>
        <span className="icons">
          <a href="https://www.facebook.com/paloma.fernandez.7583">
            <img src={facebook} alt="facebook" className="redesIcon" />
          </a>
        </span>
        <span className="icons">
          <a href="https://www.instagram.com">
            <img src={whatsapp} alt="whatsapp" className="redesIcon" />
          </a>
        </span>
        <span className="icons">
          <a href="https://www.tiktok.com/@palofernandez14">
            <img src={tiktok} alt="tiktok" className="redesIcon" />
          </a>
        </span>

      </div>
    </div>
  );
}