import React from 'react'
import CardDetail from './CardDetail'
import '../styles/Detail.css'

export default function Detail({s}) {
  return (
    <div className='detail'>
      <br/>
    
      <div className='card-detail'>
      <CardDetail s={s}/>

      </div>
      
    </div>
  )
}
