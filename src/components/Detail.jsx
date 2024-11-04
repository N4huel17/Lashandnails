/* eslint-disable react/prop-types */

import CardDetail from './CardDetail'
import '../styles/Detail.css'
import Buttom from './home/Buttom'
import RelatedProduct from './home/RelatedProduct'


export default function Detail({ s }) {

  return (
    <div className='detail'>

      <a style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder', marginTop: '15px' }} href="/">Home / {s.name}</a>
      <br />
      <br />
      <div className='card-detail'>
        <CardDetail s={s} />

      </div>
      <div>
        <Buttom  s={s} />
      </div>

      <div>
        <h3 className='titulo' >OTROS SERVICIOS</h3>
        <RelatedProduct s={s} />
      </div>

    </div>
  )
}
