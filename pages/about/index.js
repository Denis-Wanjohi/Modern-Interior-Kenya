import React, {Fragment} from 'react';
// import Navbar from '../../components/Navba2/Navbar2'
import Navbar from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about'
import About2 from '../../components/about2/index'
import About3 from '../../components/about3/index'
import About4 from '../../components/about4/index'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact/FunFact'
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/logo.svg'
// import abimg from '/public/images/about.jpg'
import abimg from '/public/images/Sample collection/sample 2.jpg'




const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About abimg={abimg}/>
            <About2></About2>
            {/* <About3></About3> */}
            <About4></About4>
            <ProjectSection/>
            <ServiceSection/>
            <FunFact fnClass={'wpo-fun-fact-section-s2'}/>
            {/* <Pricing/> */}
            {/* <TeamSection/> */}
            <Testimonial/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
