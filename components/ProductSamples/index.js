import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import Image from 'next/image'

import hImg1 from '/public/images/slider/s2.jpg'
import hImg2 from '/public/images/slider/s3.jpg'
import hImg3 from '/public/images/slider/s4.jpg'
import hImg4 from '/public/images/slider/s2.jpg'
import poster1 from '/public/images/Sample collection/Poster/poster1.jpg'
import poster2 from '/public/images/Sample collection/Poster/poster2.jpg'
import poster3 from '/public/images/Sample collection/Poster/poster3.jpg'
import poster4 from '/public/images/Sample collection/Poster/poster4.jpg'
import poster5 from '/public/images/Sample collection/Poster/poster5.jpg'
import poster6 from '/public/images/Sample collection/Poster/poster6.jpg'
import poster7 from '/public/images/Sample collection/Poster/poster7.jpg'
import poster8 from '/public/images/Sample collection/Poster/poster8.jpg'
import poster9 from '/public/images/Sample collection/Poster/poster9.jpg'
import poster10 from '/public/images/Sample collection/Poster/poster10.jpg'
import poster11 from '/public/images/Sample collection/Poster/poster11.jpg'
import poster12 from '/public/images/Sample collection/Poster/poster12.jpg'
import poster13 from '/public/images/Sample collection/Poster/poster13.jpg'
import poster14 from '/public/images/Sample collection/Poster/poster14.jpg'
import poster15 from '/public/images/Sample collection/Poster/poster15.jpg'
import poster16 from '/public/images/Sample collection/Poster/poster16.jpg'


const ProductSamples = () => {
    let images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    var settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="static-hero-s2">
            <p className="static-hero-s2-title">
                S A M P L E S
            </p>
            <div className="static-hero-slide-img owl-carousel">
                <Slider {...settings}>
                    <div className="slide-img">
                        <Image src={poster1} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster2} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster3} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster4} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster5} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster6} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster7} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster8} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster9} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster10} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster11} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster12} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster13} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster14} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster15} alt="" />
                    </div>
                    <div className="slide-img">
                        <Image src={poster16} alt="" />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default ProductSamples;