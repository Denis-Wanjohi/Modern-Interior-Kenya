import React from 'react'
import Link from 'next/link'
import Services from '../../../api/service'
import SectionTitle from '../../SectionTitle'
import Image from 'next/image'
import SectionTitle2 from '../../SectionTitle2'


const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <>
            <div className={`wpo-service-area-s2 section-padding pt-0 ${props.srvClass}`}>
                <div className="container-fluid">
                    <SectionTitle subTitle={'Our Capabilities'} MainTitle={'What We Do'}/>
                    {/* <SectionTitle2 subTitle={'Our Capabilities'} MainTitle={'What We Do'} vText={'Services'}/> */}
                    <div className="row align-items-center">
                        {Services.slice(6,10).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={sitem}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <Image src={service.sImg} alt=""/>
                                    </div>
                                    <div className="wpo-service-text">
                                    {/* <h2><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.sTitle}</Link></h2> */}
                                    <h2>{service.sTitle}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`wpo-service-area section-padding ${props.sClass}`}>
                <div className="container">
                    <div className="row align-items-center">
                        {Services.slice(0,6).map((service, sitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                                <div className="wpo-service-item">
                                    <i className={service.icon}></i>
                                    <h2>{service.sTitle}</h2>
                                    <p>{service.description}</p>
                                    {/* <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>Learn More...</Link> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceSection;