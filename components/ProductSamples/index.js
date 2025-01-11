import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import Image from 'next/image'

import hImg1 from '/public/images/slider/s2.jpg'
import hImg2 from '/public/images/slider/s3.jpg'
import hImg3 from '/public/images/slider/s4.jpg'
import hImg4 from '/public/images/slider/s2.jpg'



const ProductSamples = () => {

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
            {/* <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-6 col-md-5 col-12"> */}
                                <p className="static-hero-s2-title">
                                    S A M P L E S
                                </p>
                                <div className="static-hero-slide-img owl-carousel">
                                    <Slider {...settings}>
                                        <div className="slide-img">
                                            <Image src={hImg1} alt="" />
                                        </div>
                                        <div className="slide-img">
                                            <Image src={hImg2} alt="" />
                                        </div>
                                        <div className="slide-img">
                                            <Image src={hImg3} alt="" />
                                        </div>
                                        <div className="slide-img">
                                            <Image src={hImg4} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            {/* </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default ProductSamples;