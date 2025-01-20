import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo/VideoModal'
import abimg from '/public/images/Sample collection/Collections.jpg'
import Image from 'next/image'


const About4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="wpo-about-area-s4 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <Image src={abimg} alt="" />
                            <div className="left-shape">
                                <div className="square-shape"></div>
                                <div className="shape-top">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="shape-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                
                                <h2>Why choose us</h2>
                                <span>We have the latest and affordable wallpaper design in the country.</span>
                            </div>
                            <ul className="ab-list">
                                <li> A solid-colored wallpaper with a slight sheen, for example, can introduce drama and create a sense of dimension by reflecting light and adding texture to the environment.</li>
                                <li>Wallpapers are a versatile and powerful way to personalize your decor, offering endless possibilities—from vibrant hues and intricate patterns to minimalist designs and various textures.</li>
                                <li> Whether you prefer something bold or subtle, geometric or floral, there's a wallpaper style to suit every taste and elevate any room.</li>
                            </ul>
                            <div className="btns">
                                <Link href="/show" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invisible-title1">
                <h2>About</h2>
            </div>
        </div>
    )
}

export default About4;