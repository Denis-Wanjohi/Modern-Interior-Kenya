import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo/VideoModal'
import abimg from '/public/images/about4.jpg'
import abimg2 from '/public/images/about-shape.jpg'
import Image from 'next/image'
import sample5 from '/public/images/Sample collection/White-Gold surface/sample5.jpg'



const About3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="wpo-about-area-s3 section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <Image src={sample5} alt=""/>
                            <div className="wpo-about-img-text">
                                <h2>5+</h2>
                                <p>Years of Experience</p>
                                <div className="about-shape">
                                    <Image src={abimg2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <h1>About Us</h1>
                            <div className="wpo-about-title">
                                <h2>Delivering Exceptional Interior Design Solutions</h2>
                            </div>
                            <p>We are dedicated to transforming spaces with creativity, precision, and innovation. Our mission is to bring your vision to life through thoughtfully curated designs that reflect your personality and style.</p>
                            <ul className="ab-list">
                                <li>We offer complimentary consultations to guide your design journey.</li>
                                <li>Our team comprises experienced and passionate interior designers.</li>
                                <li>We collaborate with leading businesses to deliver outstanding results.</li>
                            </ul>
                            <div className="btns">
                                <Link href="/shop" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                {/* <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3;