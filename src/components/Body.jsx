import '../styles/Body.css'
import portada from '../styles/img/portada.jpg';
import Card from './home/Card';
import Services from './data/Services'


export default function Body() {
  const servicesList = Services.map(s => {
    return  <Card key={s.id} id={s.id} name= {s.name}  price= {s.price} description= {s.description} mainImage={s.mainImage} />
  })
  return (
    <div>
      <div className="home_main-portada">
        <img src={portada} alt=""/>
       
      </div>

      <section id="servicios">
        <div className="container">


          <h2  style={{  marginLeft: '120px', marginTop:'20px' }} >Servicios</h2>

          <div className="cartelitos">


      {servicesList}

          </div>

        </div>

      </section>

   




    </div>

  )
}
