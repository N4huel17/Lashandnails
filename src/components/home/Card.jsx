
export default function Card({name= "name defecto", price= "name defecto",description= "name defecto", mainImage= "1.jpg"}) {

  return (

    <div className="card">
    <h3>{name}</h3>
    <div className="image-container">
      <img src={mainImage} alt="" />
    </div>
    <div className="overlay">
      <div className="info">
      <p className="price"> Desde : $ {price}</p>
      <p className="description">{description}</p>
      </div>
     
      <button className="oculto">+ ver más</button>
    </div>
    <button className="button">+ ver más</button>
  </div>

  )
}

