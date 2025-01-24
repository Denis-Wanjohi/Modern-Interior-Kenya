import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import Image from 'next/image'

import hImg1 from '/public/images/slider/s2.jpg'
import hImg2 from '/public/images/slider/s3.jpg'
import hImg3 from '/public/images/slider/s4.jpg'
import hImg4 from '/public/images/slider/s2.jpg'

import sample1 from '/public/images/Sample collection/White-Gold surface/sample1.jpg'
import sample2 from '/public/images/Sample collection/White-Gold surface/sample2.jpg'
import sample3 from '/public/images/Sample collection/White-Gold surface/sample3.jpg'
import sample4 from '/public/images/Sample collection/White-Gold surface/sample4.jpg'
import sample5 from '/public/images/Sample collection/White-Gold surface/sample5.jpg'

import contact_paper_collection from '/public/images/Sample collection/Contact Paper/collection.jpg'
import contact_paper_table from '/public/images/Sample collection/Contact Paper/contactPaper_4.jpg'
import contact_paper_bathroom from '/public/images/Sample collection/Contact Paper/contactPaper_1.jpg'
import contact_paper_kitchen from '/public/images/Sample collection/Contact Paper/contactPaper_2.jpg'
import contact_paper_table_layouts from '/public/images/Sample collection/Marbel/all-colors.jpg'
import contact_paper_collection2 from '/public/images/Sample collection/Marbel/gray.jpg'
import brick_collection from '/public/images/Sample collection/Brick/brick_patterns.jpg'
import brick_walls from '/public/images/Sample collection/Brick/brick_sample1.jpg'
import vinyl_collection from '/public/images/Sample collection/Vinyl/sample10.jpg'
import vinyl_collection1 from '/public/images/Sample collection/Vinyl/sample1.jpg'
import vinyl_marble from '/public/images/Sample collection/Vinyl/sample5.jpg'
import vinyl_marble2 from '/public/images/Sample collection/Vinyl/sample6.jpg'
import vinyl_tvroom from '/public/images/Sample collection/Vinyl/sample7.jpg'
const WhiteGold = () => {
    const [currentSlideAlt, setCurrentSlideAlt] = React.useState("Marble White-Gold Design");
    var settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        beforeChange: (current, next) => setCurrentSlideAlt(slides[next].alt),
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
    const slides = [
        { src: sample1, alt: "White-Gold Contact Paper" },
        { src: sample2, alt: "White-Gold Contact Paper - Bathroom " },
        { src: sample3, alt: "White-Gold Contact Paper -Bathroom" },
        { src: sample4, alt: "White-Gold Contact Paper - Dining" },
        { src: sample5, alt: "White-Gold Contact Paper - Office" },
        { src: contact_paper_collection, alt: "Contact Paper Collection" },
        { src: contact_paper_table, alt: "Contact Paper Table" },
        { src: vinyl_collection1, alt: "Vinyl Collection" },
        { src: vinyl_marble2, alt: "Vinyl Layout" },
        { src: contact_paper_bathroom, alt: "Contact Paper Bathroom" },
        { src: contact_paper_kitchen, alt: "Contact Paper Kitchen" },
        { src: contact_paper_table_layouts, alt: "Contact Paper Table Layouts" },
        { src: contact_paper_collection2, alt: "Contact Paper (walls & floor)" },
        { src: brick_collection, alt: "Brick Collection" },
        { src: brick_walls, alt: "Brick Walls" },
        { src: vinyl_collection, alt: "Vinyl Collection" },
        { src: vinyl_marble, alt: "Vinyl Layout" },
        { src: vinyl_tvroom, alt: "Vinyl TV Room" }
    ];

    // Shuffle the slides array
    // const shuffledSlides = slides.sort(() => Math.random() - 0.5);
    const [title,setTitle] = React.useState('')
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            
                            <div className="col-xl-8 col-lg-6 col-md-5 col-12">
                                <div className="static-hero-slide-img owl-carousel">
                                    <Slider {...settings}>
                                    {slides.map((slide, index) => (
                                        
                                        <div className="slide-img" key={index}>
                                        <Image src={slide.src} alt={slide.alt} />

                                        <p>{slide.alt}</p>
                                        {/* <p>{currentSlideAlt}</p> */}
                                        </div>
                                        
                                    ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-7 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-title">
                                    <h2>{currentSlideAlt}</h2>
                                    </div>
                                    <div className="slide-btns">
                                        <p>{title}</p>
                                        <Link href="/shop">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhiteGold;