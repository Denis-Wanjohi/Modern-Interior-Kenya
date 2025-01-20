import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/Sample collection/Marbel/all-colors.jpg'
// public\images\Sample collection\Marbel\all-colors.jpg
import abimg2 from '/public/images/about3.jpg'
import Image from 'next/image'
import VideoModal from '../ModalVideo/VideoModal'

const About2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area-s2 section-padding">
            <div className="container">
                <div className="row align-items-center"> 
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                {/* <span>Wallpapers</span> */}
                                <h2 className='wallpaper'>Wallpapers</h2>
                                <p className='wallpaper-info'>
                                Our wallpaper collection features a wide range of textures, patterns, and colors that will bring a sophisticated flair to your space. Additionally, we provide bespoke wallpaper designs tailored to your unique preferences.</p>
                                {/* <h2>We Offer You Profesional Interior Design</h2> */}
                            </div>
                            <ul className="ab-list">
                                <li>When selecting the right wallpaper for your interior, there are several factors to consider, such as color, pattern, texture, and theme. </li>
                                <li>Taking the time to explore your options will help you discover the perfect design that excites you and enhances your space. </li>
                                <li> Solid-colored or patterned wallpapers can bring richness and depth to a room.</li>
                            </ul>
                            <div className="btns">
                                <Link href="/shop/product/marble-white-gold" onClick={ClickHandler} className="theme-btn">See Samples</Link>
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-left">
                                <Image src={abimg} alt=""/>
                            </div>
                            {/* <div className="wpo-about-img-right">
                                <Image src={abimg2} alt=""/>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About2;