import React, {Fragment} from 'react';
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Link from 'next/link'
import {totalPrice} from "../../utils";
import Image from 'next/image'

// images
import visa from '/public/images/icon/visa.png';
import mastercard from '/public/images/icon/mastercard.png';
import skrill from '/public/images/icon/skrill.png';
import paypal from '/public/images/icon/paypal.png';

import CheckWrap from '../CheckWrap'
import checkout from '../../pages/checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearCart } from '../../store/actions/action';

const cardType = [
    {
        title: 'visa',
        img: visa
    },
    {
        title: 'mastercard',
        img: mastercard
    },
    {
        title: 'skrill',
        img: skrill
    },
    {
        title: 'paypal',
        img: paypal
    },
];


const CheckoutSection = (props) => {
    // console.log(props)
    const {cartList} = props
    // states
    const [tabs, setExpanded] = React.useState({
        cupon: false,
        billing_adress: false,
        payment: true
    });
    const [isSendingEmail,setSendingEmail] = React.useState(false)
    const [emailSent,setEmailSent] = React.useState(false)
    const [forms, setForms] = React.useState({
        fname: '',
        lname: '',
        location:'',
        county:'',
        email: '',
        phone: '',
        note: '',
    });

    const [dif_ship, setDif_ship] = React.useState(false);

    // tabs handler
    function faqHandler(name) {
        setExpanded({
            cupon: false,
            billing_adress: false,
            payment: true, [name]: !tabs[name]
        });
    }

    // forms handler
    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value})
    };

    function Checkout(){
        setSendingEmail(true)
        let data = {
            'user':forms,
            'cart':cartList
        }
        axios.post('http://localhost:3001/api/order',data)
        .then((res)=>{
            if(res.data.message == 'Email sent successfully to the office'){
                setForms({
                    fname :'',
                    lname :'',
                    email :'',
                    location :'',
                    county :'',
                    note :'',
                    phone :'',
                })
                setSendingEmail(false)
                setEmailSent(true)
                setTimeout(()=>{
                    setEmailSent(false)
                    props.clearCart()
                },5000)
            }
        }).catch(err=>{
            console.error(err)
        })
    }

    return (
        <Fragment>
            <Grid className="checkoutWrapper section-padding">
                <Grid className="container" container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <div className="check-form-area">
                            <div>
                                <h2>Checkout Form</h2>
                                <p>Fill this form with  your contact details to finish up with your order. We will reach out to discuss more.</p>
                            </div>
                            <form className="cuponForm" onSubmit={(e)=>{ e.preventDefault();Checkout()}}>
                                <Grid container spacing={3}>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="First Name"
                                            name="fname"
                                            value={forms.fname}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Last Name"
                                            name="lname"
                                            value={forms.lname}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Email Adress"
                                            name="email"
                                            value={forms.email}
                                            onChange={(e) => changeHandler(e)}
                                            type="email"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid>
                                    <Grid item  sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Phone No"
                                            name="phone"
                                            value={forms.phone}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid>

                                    {/* <Grid item sm={6} xs={12}>
                                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                                        <FormControl className="formSelect" fullWidth variant="filled">
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={forms.country}
                                                name="country"
                                                onChange={(e) => changeHandler(e)}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="County"
                                            name="county"
                                            value={forms.county}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Delivery Location"
                                            name="location"
                                            value={forms.location}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            label="Order Notes"
                                            placeholder="Note about your order"
                                            name="note"
                                            value={forms.note}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone note"
                                        />
                                    </Grid>
                                    {/* <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows="3"
                                            label="Address"
                                            name="address"
                                            value={forms.address}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid> */}
                                    {/* <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Post Code"
                                            name="post_code"
                                            value={forms.post_code}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone"
                                        />
                                    </Grid> */}

                                    
                                    {/* <Grid item xs={12}>
                                        <FormControlLabel
                                            className="checkBox"
                                            control={
                                                <Checkbox
                                                    checked={dif_ship}
                                                    onChange={() => setDif_ship(!dif_ship)}
                                                    value={dif_ship}
                                                    color="primary"
                                                />
                                            }
                                            label="Ship to a different address?"
                                        />
                                    </Grid> */}
                                    {/* <Grid item xs={12}>
                                        <Collapse in={dif_ship} timeout="auto" unmountOnExit>
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="First Name"
                                                        name="fname2"
                                                        value={forms.fname2}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Last Name"
                                                        name="lname2"
                                                        value={forms.lname2}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <InputLabel
                                                        id="demo-simple-select-filled-label">Age</InputLabel>
                                                    <FormControl className="formSelect" fullWidth
                                                                variant="filled">
                                                        <Select
                                                            labelId="demo-simple-select-filled-label"
                                                            id="demo-simple-select-filled"
                                                            value={forms.country2}
                                                            name="country2"
                                                            onChange={(e) => changeHandler(e)}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Dristrict"
                                                        name="dristrict2"
                                                        value={forms.dristrict2}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        rows="3"
                                                        label="Address"
                                                        name="address2"
                                                        value={forms.address2}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Post Code"
                                                        name="post_code2"
                                                        value={forms.post_code2}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Phone No"
                                                        name="phone2"
                                                        value={forms.phone2}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            label="Order Notes"
                                            placeholder="Note about your order"
                                            name="note"
                                            value={forms.note}
                                            onChange={(e) => changeHandler(e)}
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className="formInput radiusNone note"
                                        />
                                    </Grid> */}
                                </Grid>
                                <Grid className="cardType checkout-button">
                                    {/* <Link href='/order_received' className="cBtn cBtnLarge cBtnTheme mt-20 ml-15" type="submit">Proceed to Checkout</Link> */}
                                    
                                    {
                                        emailSent ? 
                                        <p>Email sent! 👍</p>
                                        :isSendingEmail ?
                                        <div>Sending email . . .</div>
                                        : <button type='submit'>Submit</button>
                                    }
                                    {/* <Button type='submit' onClick={()=>{ Checkout()}}>Proceed to Checkout</Button> */}
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Grid className="cartStatus">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grid className="cartTotals">
                                        <h4>Cart Total</h4>
                                        <Table>
                                            <TableBody>
                                                {cartList.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell>
                                                            {item.installationFee ?
                                                                 <span >{item.title} Ksh.{item.price} x {item.qty} <span className='installationFee'>+installation fee</span> </span>
                                                                : <span>{item.title} Ksh.{item.price} x {item.qty}</span>
                                                            }
                                                            
                                                        </TableCell>
                                                        <TableCell
                                                            align="right">
                                                            {item.installationFee ? <span>Ksh.{(item.qty * item.price) + (item.installFee * item.qty)}  </span>: <span>Ksh.{item.qty * item.price}</span>}
                                                            {/* Ksh.{item.qty * item.price} */}
                                                            </TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow className="totalProduct">
                                                    <TableCell>Total Item</TableCell>
                                                    <TableCell align="right">{cartList.length}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Sub Price</TableCell>
                                                    <TableCell align="right">Ksh.{totalPrice(cartList)} 
                                                    {/* {cartList.installationFee ? <span className='installationFee'>+installation fee (500)</span>: ""} */}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Total Price</TableCell>
                                                    <TableCell
                                                        align="right">Ksh.{totalPrice(cartList)}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
};
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps,{clearCart})(CheckoutSection);