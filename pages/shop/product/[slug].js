import React, { Fragment, useState } from 'react';
import { Router, useRouter } from 'next/router'
import Services from '../../../api/service'
import ServiceSidebar from './sidebar';
// import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../../components/Navbar2/Navbar2';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
// import RelatedService from './single/related';
// import Discuss from './single/discuss';
import Logo from '/public/images/logo.svg'
import Image from 'next/image'

import pImg1 from '/public/images/service-single/2.jpg'
import pImg2 from '/public/images/service-single/3.jpg'
import { addToCart } from '../../../store/actions/action';
import { connect } from 'react-redux';
import cartReducer from '../../../store/reducers/cart';
import Products from '../../../api/products';



const SeviceSinglePage = (props) => {
    const [isReady,setIsReady] = useState(false)
    const router = useRouter()
    const selectedProduct = Products.find(item => item.slug === useRouter().asPath.replace('/shop/product/',''))
    // const selectedProduct = Products.find(item => item.slug === 'marble-white-gold')
    setTimeout(()=>{
        setIsReady(true)
    },2000)
    const addToCartProduct = (product, qty, installationFee) => {
        props.addToCart(product,qty,installationFee)
    };
    return (
        <Fragment>
            
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-2'} />
            {/* <PageTitle pageTitle={serviceDetails?.sTitle} pagesub={serviceDetails?.sTitle} /> */}
            {
                isReady ?
                <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <Image src={selectedProduct?.mainImg} alt="service" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{selectedProduct?.title}</h3>
                                    </div>
                                    <div>
                                        <p>Price per Roll: Khs. {selectedProduct?.price}/=</p>
                                        <p>1 Roll measurement: {selectedProduct?.width}m * {selectedProduct?.height}m =  {(selectedProduct?.width * selectedProduct.height).toFixed(2)}m<sup>2</sup> </p>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={selectedProduct?.Img1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={selectedProduct?.Img2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={selectedProduct?.Img3} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={selectedProduct?.Img4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                        risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam.</p>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                        <li>Elit curabitur amet risus bibendum.</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul>
                                </div> */}
                                {/* <RelatedService /> */}
                                {/* <Discuss /> */}
                            </div>
                        </div>
                        <ServiceSidebar addToCart={addToCartProduct} product={selectedProduct} />
                    </div>
                </div>
            </div>
                :
                <div className='spinner'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24"><rect width="6" height="14" x="1" y="4" fill="#e06310"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"/><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"/><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"/></rect><rect width="6" height="14" x="9" y="4" fill="#e06310" opacity="0.4"><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"/><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"/></rect><rect width="6" height="14" x="17" y="4" fill="#e06310" opacity="0.3"><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"/><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"/></rect></svg>
                </div>
            }
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
}
export default connect(mapStateToProps,{addToCart}) (SeviceSinglePage);
