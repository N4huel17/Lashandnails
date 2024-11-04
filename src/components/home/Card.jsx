export default function Card({
  id = '1',
  name = "name defecto",
  price = "price defecto",
  description = "description defecto",
  mainImage // Recibe la URL de la imagen
}) {
  return (
    <div className="card">
      <a href={`/detalle/${id}`}>
        <h3 className="name">{name}</h3>
        <div className="image-container">
          <img src={mainImage} alt={name} /> {/* Usa la URL directamente */}
        </div>
        <div className="overlay">
          <div className="info">
            <p className="price"> Desde : $ {price}</p>
            <p style={{ marginLeft: '0px', fontSize: '10px' }} className="description">
              {description}
            </p>
          </div>
          <a href={`/detalle/${id}`}>
            <button className="oculto">+ ver más</button>
          </a>
        </div>
        <a href={`/detalle/${id}`}>
          <button className="button">+ ver más</button>
        </a>
      </a>
    </div>
  );
}