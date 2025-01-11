import React from 'react'
import Services from '../../../api/service';
import Link from 'next/link'
import ins1 from '/public/images/instragram/7.jpg'
import ins2 from '/public/images/instragram/8.jpg'
import ins3 from '/public/images/instragram/9.jpg'
import ins4 from '/public/images/instragram/10.jpg'
import ins5 from '/public/images/instragram/11.jpg'
import ins6 from '/public/images/instragram/12.jpg'
import Image from 'next/image'
import { useState } from 'react';

const ServiceSidebar = (props) => {
    const [height,setHeight] = useState('')
    const [width,setWidth] = useState('')
    const [total,setTotal] = useState(0)
    const [rolls,setRolls] = useState(null)
    const [totalPrice,setTotalPrice] = useState(0)
    const SubmitHandler = (e) => {
        console.log(e)
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const HeightChange= (event)=>{
        let value = 0
        if(event.target.value < 0){
            setHeight(0)
            value = 0
        }else{
            setHeight(event.target.value)
            value = event.target.value
        }
        
        calculate(value,width)
        
    }
    const WidthChange = (event)=>{
        let value = 0
        if(event.target.value < 0){
            setWidth(0)
            value = 0
        }else{
            setWidth(event.target.value)
            value = event.target.value
        }
        calculate(height,value)
    }

    const calculate = (h,w)=>{
        let total =  h * w;
        setTotal(total)
        calculateRolls(total)
    }
    
    const calculateRolls = (t)=>{
        setRolls(Math.ceil(t/5))
        calculateTotalPrice(Math.ceil(t/5))
    }

    const calculateTotalPrice = (r)=>{
        setTotalPrice(r * 500)
    }

    return (
        <div className="col-lg-4 col-12">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Calculator</h3>
                    <div className="flex-box">
                        <h6>
                            <span>Price:</span>Ksh. 500
                        </h6>
                        <h6>
                            <span>1 Roll:</span>(0.5m*10m) 5m<sup>2</sup>
                        </h6>
                    </div>
                    <div className="measurements">
                        <p>Below add your measurements:</p>
                        <div className="flex-box">
                            <div>
                                <p>Height</p>
                                <div className='flex-box'>
                                    <input type="number" onChange={HeightChange} value={height}></input>
                                    <p>m</p>
                                </div>
                            </div>
                            <div>
                                <p></p>
                                <p>*</p>
                            </div>
                            <div>
                                <p>Width</p>
                                <div  className='flex-box'>
                                    <input type="number" onChange={WidthChange} value={width}></input>
                                    <p>m</p>
                                </div>
                            </div>
                            <div>
                                <p></p>
                                <p>=</p>
                            </div>
                            <div>
                                <p>Total</p>
                                <div className='flex-box'>
                                    <div className="total">{total}</div>
                                    <p>m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rolls">
                        <div className="flex-box">
                            <p>5m<sup>2</sup> </p>
                            <p> = </p>
                            <p>1 Roll</p>
                        </div>
                        <div className="flex-box">
                            <p>{total }m<sup>2</sup></p>
                            <p> = </p>
                            <p>{rolls != null ? rolls : 0} {rolls != 1? "Rolls" : "Roll"}</p>
                        </div>
                    </div>
                    <div className="summary">
                        <div className='flex-box'>
                            <h6>Price: </h6>
                            <p>Ksh.500</p>
                        </div>
                        <div className='flex-box'>
                            <h6>Rolls: </h6>
                            <p>{rolls != null ? rolls : 0} {rolls != 1? "Rolls" : "Roll"}</p>
                        </div>
                        <div className='flex-box'>
                            <h6>Total: </h6>
                            <p>500 * {rolls != null ? rolls : 0} = Ksh. {totalPrice}</p>
                        </div>
                    </div>

                    
                </div>
                {/* <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="/">Privecy Policy</Link></span>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Image src={ins1} alt="" /></li>
                        <li><Image src={ins2} alt="" /></li>
                        <li><Image src={ins3} alt="" /></li>
                        <li><Image src={ins4} alt="" /></li>
                        <li><Image src={ins5} alt="" /></li>
                        <li><Image src={ins6} alt="" /></li>
                    </ul>
                </div> */}
            </div>
        </div>

    )
}

export default ServiceSidebar;
