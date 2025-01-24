import React from 'react'
import Link from "next/link";
import Services from '../../api/service';
import Projects from '../../api/project'
import Image from 'next/image'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.ftClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} className="logo" href="/"><img src='/images/Modern Interior Kenya Logo.png' alt="" /></Link>
                                </div>
                                <p>Bringing innovative design solutions to life, blending style and functionality to create inspiring spaces that elevate your environment.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/" style={{display:"flex",alignItems:"center",justifyItems:"center"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{padding:"1",color:'white'}} onMouseEnter={(e) => e.currentTarget.style.color = 'orange'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'white'} viewBox="2 -3 20 27"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, srv) => (
                                        <li key={srv}>{service.sTitle}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>Meru Town</li>
                                        <li><i className="fi flaticon-telephone"></i>+254768269926</li>
                                        <li><i className="fi flaticon-email"></i>moderninteriorkenya@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Our Gallery</h3>
                                </div>
                                <ul className="d-flex">
                                    {Projects.slice(0, 6).map((project, srv) => (
                                        <li key={srv}><Image src={project.pImg} alt="" /></li>
                                        // <li key={srv}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><Image src={project.pImg} alt="" /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <ul>
                                <li>&copy; {new Date().getFullYear()} Modern Interior Kenya. All Rights
                                    Reserved.</li>
                                {/* <li><Link onClick={ClickHandler} href="/">Terms of use |</Link> <Link onClick={ClickHandler} href="/">Privacy Environmental Policy</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;