import '../../styles/Buttom.css';


export default function Buttom({s}) {


    return (
        <div className="center">
            <div className="btn-1">
                <a href=""><span>¿Cómo reservar un turno?</span></a>
            </div>
            
            <div className="btn-2">
                {/* Aquí se agrega el ID a la URL */}
                <a href={`/agenda/${s.id}`}><span>Reservar Turno</span></a>
            </div>
        </div>
    );
}