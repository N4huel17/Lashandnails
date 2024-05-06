import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Services from '../data/Services';
import '../../styles/RelatedProduct.css'

export default function RelatedProducts({ s }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "25%"
    };

    return (

        <Slider {...settings}>
            {Services.map(s => (
                <div className="card-cont" >

                    <div className="card-rp" key={s.id}>
                        <a href={`/detalle/${s.id}`}>
                            <h3 className='name'>{s.name}</h3>
                            <div className="image-container-rp">
                                <img src={s.mainImage} alt="" />
                            </div>
                            <div className="overlay-rp">
                                <div className="info-rp">
                                    <p className="price-rp">Desde: $ {s.price}</p>
                                </div>


                            </div>

                        </a>

                    </div>

                </div>
            ))}
        </Slider>
    );
}
