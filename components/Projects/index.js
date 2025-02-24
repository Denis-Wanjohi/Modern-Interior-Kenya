import React from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import Projects from '../../api/project'
import Image from 'next/image'
import Products from '../../api/products';

const ProjectSection = (props) => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className={`wpo-project-area ${props.pClass}`}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="wpo-project-wrap project-active owl-carousel">
                        <Slider {...settings}>
                            {Products.slice(2, 6).map((product, pot) => (
                                <div className="wpo-project-item" key={pot}>
                                    <div className="wpo-project-img">
                                        <Image src={product.mainImg} alt="" />
                                        <div className="left-border"></div>
                                        <div className="right-border"></div>
                                    </div>
                                    <div className="wpo-project-text">
                                        <h2><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${product.slug}`}>{product.title}</Link></h2>
                                        <span>{product.subTitle}</span>
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

export default ProjectSection;

