import '../styles/Body.css'
import portada from '../styles/img/portada.jpg';
import Card from './home/Card';
import { Services } from '../data/Services'


export default function Body() {
  const servicesList = Services.map(servi => {
    return <card/>
})
  return (
    <div>
      <div className="home_main-portada">
        <img src={portada} alt="" />
        <h1 className="portada-titulo">LashandNails</h1>
      </div>



      <section id="servicios">
        <div className="container">


          <h2>Servicios</h2>

          <div className="cartelitos">


         <Card/>

          </div>

        </div>

      </section>




    </div>

  )
}
