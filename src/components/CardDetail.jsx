import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClockFour, faMagnifyingGlass, faTimes, faUserTimes } from "@fortawesome/free-solid-svg-icons";

export default function CardDetail({ s }) {

  return (

    <div className="card-container">
      <img className="img-detail" src={s.mainImage} alt="" />
      <h4 className="detail-name">{s.name}</h4>
      <p className="price-detail"> Desde : <b>$ {s.price}</b></p>
      <p className="detail-description"> {s.description}</p>
       <p className="time-description"> <FontAwesomeIcon icon={faClockFour} />    {s.time}</p>
       <br />
    </div>
 

  );
}