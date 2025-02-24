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
import { addToCart } from '../../../store/actions/action';

const ServiceSidebar = ({addToCart,product}) => {
    const [height,setHeight] = useState('')
    const [length,setLength] = useState('')
    const [total,setTotal] = useState(0)
    const [rolls,setRolls] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
    const [finalPrice,setFinalPrice] = useState(0)
    const [installationFee,setInstallatonFee] = useState(false)
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
        setInstallatonFee(false)
        calculate(value,length)
        
    }
    const LengthChange = (event)=>{
        let value = 0
        if(event.target.value < 0){
            setLength(0)
            value = 0
        }else{
            setLength(event.target.value)
            value = event.target.value
        }
        setInstallatonFee(false)
        calculate(height,value)
    }

    const calculate = (h,w)=>{
        let total =  h * w;
        setTotal(total)
        setFinalPrice(total)
        calculateRolls(total)
    }
    
    const calculateRolls = (t)=>{
        setRolls(Math.ceil(t/(product.width * product.height).toFixed(2)))
        calculateTotalPrice(Math.ceil(t/(product.width * product.height).toFixed(2)))
    }

    const calculateTotalPrice = (r)=>{
        setTotalPrice(r * product.price)
        setFinalPrice(r * product.price)
    }

    const checkInstallationFee = ()=>{
        if(installationFee){
            setInstallatonFee(false)
            setFinalPrice(totalPrice)
        }else{
            setInstallatonFee(true)
            let total = totalPrice + (product.installFee * rolls)
            setFinalPrice(total)
        }
    }

    const clearAll = ()=>{
        setLength(0)
        setHeight(0)
        setTotal(0)
        setRolls(0)
        setTotalPrice(0)
        setFinalPrice(0)
        setInstallatonFee(false)
    }

    return (
        <div className="col-lg-4 col-12">
            <div className="blog-sidebar">
                {/* <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                <div className="widget category-widget">
                    <h2>{product.title}</h2>
                    <div className="flex-box">
                        <h6>
                            <span>Price:</span>Ksh. {product.price}
                        </h6>
                        <h6>
                            <span>
                            {product.type != 'brick'?
                                "1 Roll" : "1 Piece"
                            }
                                :
                            </span>({product.height}m*{product.width}m) {(product.width * product.height).toFixed(2)}m<sup>2</sup>
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
                                <p>Length</p>
                                <div  className='flex-box'>
                                    <input type="number" onChange={LengthChange} value={length}></input>
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
                            <p>{(product.width * product.height).toFixed(2)}m<sup>2</sup> </p>
                            <p> = </p>
                            <p>{product.type != 'brick'?
                                "1 Roll" : "1 Piece"
                            }</p>
                        </div>
                        <div className="flex-box">
                            <p>{total }m<sup>2</sup></p>
                            <p> = </p>
                            {product.type != 'brick'?
                                <p>{rolls != null ? rolls : 0} {rolls != 1? "Rolls" : "Roll"}</p>
                                :<p>{rolls != null ? rolls : 0} {rolls != 1? "Pieces" : "Piece"}</p>

                            }
                            {/* <p>{rolls != null ? rolls : 0} {rolls != 1? "Rolls" : "Roll"}</p> */}
                        </div>
                    </div>
                    <div className="summary">
                        <div className='flex-box'>
                            <h6>Price: </h6>
                            <p>Ksh.{product.price}</p>
                        </div>
                        <div className='flex-box'>
                            <h6>Rolls: </h6>
                            {product.type != 'brick'?
                                <p>{rolls != null ? rolls : 0} {rolls != 1? "Rolls" : "Roll"}</p>
                                :<p>{rolls != null ? rolls : 0} {rolls != 1? "Pieces" : "Piece"}</p>

                            }
                            {/* <p>{rolls != null ? rolls : 0} {rolls != 1? "Rolls" : "Roll"}</p> */}
                        </div>
                        <div className='flex-box'>
                            <h6>Total: </h6>
                            <p>{product.price} * {rolls != null ? rolls : 0} = Ksh. {totalPrice}</p>
                        </div>
                    </div>
                    <div>
                        <div className='installation-fee-section'>
                            <div className='flex-box'>
                                <div className='installation-fee'>
                                    <p>Installation fee <span>
                                    {product.type != 'brick'?"(per roll)": "(per piece)" }
                                        </span>: </p>  
                                    <h6> Ksh.{product.installFee}</h6>
                                </div>
                                {
                                    installationFee ?
                                    <input type='checkbox' checked onClick={()=>{checkInstallationFee()}}></input>:
                                    <input type='checkbox'onClick={()=>{checkInstallationFee()}}></input>
                                }
                                
                            </div>
                            {
                                installationFee ?
                                <div className='installation-total'>
                                    <h6>Installation:</h6>
                                    <p>Ksh.{product.installFee} *  {rolls != null ? rolls : 0}  rolls = Ksh.{product.installFee * rolls}</p>
                                </div>
                                : ''
                            }
                        </div>
                        
                        {
                            rolls > 0 ? 
                            <>
                                <div className='final-price'>
                                    <h4>Total: </h4>
                                    <h5> Ksh. {finalPrice}</h5>
                                </div><button className="theme-btn"
                                    onClick={() => {
                                        if(installationFee){
                                            product.installationFee = true
                                        }
                                        addToCart(
                                            product,rolls
                                        )
                                        clearAll()
                                    }
                                }
                                >Add To Cart</button>
                            </>:
                            ''
                        }
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
