
import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from '../../components/pagetitle/PageTitle'
import Logo from '/public/images/logo.svg';

const ProductsPage =  ()=>{
    return(
        <>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
        </> 
    );
}

export default ProductsPage;