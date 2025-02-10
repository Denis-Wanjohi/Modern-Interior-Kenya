import React, { Fragment } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../../components/pagetitle/PageTitle'
import Scrollbar from '../../../components/scrollbar/scrollbar'
import { addToCart } from "../../../store/actions/action";
import ShopProduct from '../../../components/ShopProduct';
import ProjectsS2 from '../../../components/ProjectsS2'
import Products from '../../../components/admin/ProjectsS2'
import ProductSamples from '../../../components/ProductSamples'
import api from "../../../api";
import Navbar2 from '../../../components/Navbar2/Navbar2';
import Footer from '../../../components/footer/Footer';
import Logo from '/public/images/logo.svg'

const ProductsPage = (props) => {
  const productsArray = api();

  const addToCartProduct = (product, qty = 1) => {
    props.addToCart(product, qty);
  };

  const products = productsArray

  return (
    <Fragment>
      <Navbar2 Logo={Logo} hclass={'wpo-header-style-2'} />
      {/* <PageTitle pageTitle={"Shop"} pagesub={"Shop"} /> */}
      <section className="wpo-shop-page section-padding">
        <Products/>
        {/* <ProjectsS2/> */}
        {/* <ProductSamples/> */}
      </section>
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ProductsPage);
