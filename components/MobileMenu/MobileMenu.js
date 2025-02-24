import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Home style 1',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'Home style 2',
        //         link: '/home2'
        //     },
        //     {
        //         id: 13,
        //         title: 'Home style 3',
        //         link: '/home3'
        //     },
        //     {
        //         id: 14,
        //         title: 'Home style 4',
        //         link: '/home4'
        //     },
        //     {
        //         id: 15,
        //         title: 'Home style 5',
        //         link: '/home5'
        //     },
        // ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

{
    id: 3,
        title: 'Services',
        link: '/service',
        // submenu: [
        //     {
        //         id: 31,
        //         title: 'Service',
        //         link: '/service'
        //     },
        //     {
        //         id: 32,
        //         title: 'Service style 2',
        //         link: '/service-s2'
        //     },
        //     {
        //         id: 33,
        //         title: 'Service Single',
        //         link: '/service/Perfect-Planning'
        //     }
        // ]
    },
{
    id: 4,
        title: 'Projects',
        link: '/project',
        // submenu: [
        //     {
        //         id: 41,
        //         title: 'Projects',
        //         link: '/project'
        //     },
        //     {
        //         id: 42,
        //         title: 'Projects style 2',
        //         link: '/project-s2'
        //     },
        //     {
        //         id: 43,
        //         title: 'Projects Single',
        //         link: '/project/Architecture-Design'
        //     }
        // ]
    },

    {
        id: 5,
        title: 'Shop',
        link: '/shop',
        // submenu: [
        //     {
        //         id: 771,
        //         title: 'Shop',
        //         link: '/shop'
        //     },
        //     {
        //         id: 772,
        //         title: 'Shop Single',
        //         link: '/product-single/Black-Timber-Chairs'
        //     },
        //     {
        //         id: 773,
        //         title: 'Cart',
        //         link: '/cart'
        //     },
        //     {
        //         id: 774,
        //         title: 'Checkout',
        //         link: '/checkout'
        //     },
        //     {
        //         id: 775,
        //         title: 'Team Single',
        //         link: '/team-single/William-Watson'
        //     },
        //     {
        //         id: 71,
        //         title: 'Pricing',
        //         link: '/pricing'
        //     },
        //     {
        //         id: 75,
        //         title: 'Testimonial',
        //         link: '/testimonial'
        //     },
        //     {
        //         id: 76,
        //         title: 'Error 404',
        //         link: '/404'
        //     },
    
        //     {
        //         id: 77,
        //         title: 'Login',
        //         link: '/login'
        //     },
        //     {
        //         id: 78,
        //         title: 'Register',
        //         link: '/register'
        //     },
            
        // ]
    },

    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    },

    {
        id:7,
        title:'Cart',
        link:'/cart'
    }
    
    
]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler}
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;