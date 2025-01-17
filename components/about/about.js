import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo/VideoModal'
import Image from 'next/image'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className={`wpo-about-area section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <Image src={props.abimg} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Us</span>
                                <h2>We Offer You Profesional Interior Design</h2>
                            </div>
                            <h5>Over 5 years  colaborating with investors, building their conceptials ideas & business goals go to the perfection</h5>
                            <p>Here at Modern Interior Kenya we not only focus on making your gaol come true but also involve ourselves in making sure you get the best professional advice, quality product and services from your budget.</p>
                            <div className="btns">
                                <Link href="/shop" onClick={ClickHandler} className="theme-btn" >Discover More</Link>
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

export default About;