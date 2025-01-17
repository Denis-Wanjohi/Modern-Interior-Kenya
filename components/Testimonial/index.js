import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'
import Image from 'next/image'


const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonial = [
        {
            tsImg: ts1,
            Des: "“Working with this team was an absolute pleasure. They transformed our office space into something truly remarkable, combining functionality with modern design. Their attention to detail and creativity is unmatched.”",
            Title: 'Robert Henry',
            Sub: "CEO of Mendara Office",
        },
        {
            tsImg: ts2,
            Des: "“The design solutions provided exceeded our expectations. From concept to execution, the team demonstrated professionalism and a deep understanding of our needs. We couldn’t be happier with the results.”",
            Title: 'Jenefer Haiway',
            Sub: "CEO of Techsub Office",
        },
        {
            tsImg: ts3,
            Des: "“Their innovative approach to design brought a fresh energy to our workspace. The entire process was seamless, and the final outcome truly reflects our company's identity. Highly recommend their services.”",
            Title: 'Henry Bannet',
            Sub: "CEO of IBO Office",
        },
        {
            tsImg: ts1,
            Des: "“We are absolutely thrilled with the transformation of our office space. The team not only delivered a stylish design but also ensured it was practical and aligned with our brand. A job well done!”",
            Title: 'Emily Stone',
            Sub: "Founder of Stone Creations",
        },
        {
            tsImg: ts2,
            Des: "“The attention to detail and personalized approach made all the difference. They understood our vision and created a workspace that reflects both our culture and our values. The outcome exceeded expectations.”",
            Title: 'David Bryant',
            Sub: "Managing Director of Bryant Enterprises",
        },
        {
            tsImg: ts3,
            Des: "“From initial consultation to final touches, the team’s commitment to quality was evident throughout. Our new office is not just beautiful but also functional, supporting both productivity and employee well-being.”",
            Title: 'Sophie Walker',
            Sub: "COO of Walker Innovations",
        }
    ]      
    return (
        <div className="wpo-testimonial-area section-padding">
            <div className="container">
                <SectionTitle subTitle={'Testimonial'} MainTitle={'People Say About Us'} />
                <div className="wpo-testimonial-wrap">
                    <div className="testimonial-slider owl-carousel">
                        <Slider {...settings}>
                            {testimonial.map((tesmnl, tsm) => (
                                <div className="wpo-testimonial-item" key={tsm}>
                                    <div className="wpo-testimonial-top">
                                        <div className="wpo-testimonial-img">
                                            <Image src={tesmnl.tsImg} alt="" />
                                        </div>
                                        <div className="wpo-testimonial-info">
                                            <h2>{tesmnl.Title}</h2>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    </div>
                                    <div className="wpo-testimonial-content">
                                        <p>{tesmnl.Des}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;