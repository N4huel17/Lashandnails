import ReservationForm from "../ReservationForm";


export default function Diary({s}) {
  return (
    <div>
      <div style={{padding:'10px'} }>
       <p>{s.name}</p>
        <div>
        <h1>Turnos Disponibles</h1>
        <ReservationForm s={s}/>
        </div>
        
      </div>
      
    </div>
  )
}
