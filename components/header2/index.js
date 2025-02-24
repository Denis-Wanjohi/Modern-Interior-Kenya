import React, { Fragment, useState } from 'react';
import Logo from '/public/images/logo-2.svg'
import Link from "next/link";
import Image from 'next/image'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import Projects from '../../api/project'
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';
import { totalPrice } from '../../utils';
import {Button} from 'primereact/button'
import { Router, useRouter } from 'next/router';


const Header2 = (props) => {
    console.log(useRouter().pathname.includes('admin'))
    const [menuActive, setMenuState] = useState(false);
    // const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const test = ()=>{
        // console.log(props.car)
        props.carts.forEach(element => {
            console.log(element)

            
        });
        setTimeout(()=>{
            props.removeFromCart(1)
        },5000)
        
    }
    // test()
    
    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const { carts = [] } = props;

    return (
        <header id="header" >
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home">
                                        {/* <Image src={Logo} alt="" /> */}
                                        <Image src="/images/Modern Interior Kenya Logo.png" width={'200'} height={'200'} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link href="/service">Service</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/project">Project</Link>
                                            
                                        </li>
                                        <li className="menu-item-has-children">
                                            {/* <Link onClick={ClickHandler} href="/">Pages</Link> */}
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Black-Timber-Chairs">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/William-Watson">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                        {
                                           useRouter().pathname.includes('admin') ?
                                            <li><Link onClick={ClickHandler} href="/contact">Add Product</Link></li>
                                            :''

                                        }
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="col-lg-1 col-md-1 col-1 right-menu">
                               
                                {/* CART */}
                                <div className="header-right">
                                    {/* <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <Image src={catItem.mainImg}></Image>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty} {catItem.installationFee ? <span className='installationFee'>+installation fee</span>: ""}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <Link href="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                    <Link href="/cart" className="view-cart-btn">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RIGHT MENU */}
                                <div className={`header-right ${cartActive ? 'menu' : ""}`}>
                                    <div className="header-right-menu-wrapper ">
                                        <div className="header-right-menu">
                                            <div className="right-menu-toggle-btn" onClick={() => setMenuState(!menuActive)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className={`header-right-menu-wrap ${menuActive ? "right-menu-active" : ""}`}>
                                                <button onClick={() => setMenuState(!menuActive)} className="right-menu-close"><i className="ti-close"></i></button>
                                                <div className="logo"><Image src="/images/Modern Interior Kenya Logo.png" alt="logo" width={"200"} height={"200"} /></div>
                                                <div className="header-right-sec">
                                                    <div className="project-widget widget">
                                                        <h3>Our Latest Projects</h3>
                                                        <ul>
                                                            {Projects.slice(0, 6).map((project, pot) => (
                                                                <li key={pot}><Image src={project.pImg} alt="" /></li>
                                                                // <li key={pot}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><Image src={project.pImg} alt="" /></Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="widget wpo-contact-widget">
                                                        <div className="widget-title">
                                                            <h3>Contact Us</h3>
                                                        </div>
                                                        <div className="contact-ft">
                                                            <ul>
                                                                <li><i className="fi flaticon-location"></i>Meru Town</li>
                                                                <li><i className="fi flaticon-telephone"></i>+254768269926</li>
                                                                <li><i className="fi flaticon-email"></i>moderninteriorkenya@gmail.com</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <div className="widget newsletter-widget">
                                                        <div className="widget-title">
                                                            <h3>Newsletter</h3>
                                                        </div>
                                                        <form onSubmit={SubmitHandler}>
                                                            <div className="input-1">
                                                                <input type="email" className="form-control"
                                                                    placeholder="Email Address *" required="" />
                                                                <div className="submit clearfix">
                                                                    <button type="submit"><i className="ti-email"></i></button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps,{removeFromCart})(Header2);