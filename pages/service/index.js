import React from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import ServiceSection from '../../components/Services/service-page';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'
import Navbar2 from '../../components/Navbar2/Navbar2';

const ServicePage = (props) => {

    return (
        <div>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default ServicePage;


