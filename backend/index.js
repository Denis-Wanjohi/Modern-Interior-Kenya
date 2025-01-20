// server.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
const handlebars = require('handlebars');
const { promisify } = require('util');
const fs = require('fs');
const cors = require('cors');
const readFileAsync = promisify(fs.readFile);
const app = express();
// import env from './env'
let year =new Date().getFullYear()
app.use(morgan('dev'));
app.use(bodyParser.json());

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000','https://modern-interior-kenya.vercel.app'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)); // Use the cors middleware with your options


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: "gightkingss@gmail.com",
    pass: "uubswyiivxdiufql"
  }
});
app.get('/one',(req,res)=>{
  res.send("one")
})
// emal from the order page
app.post('/api/order', (req, res) => {
  const { user, cart } = req.body;
  const htmlTemplate = fs.readFileSync('./order.html', 'utf-8');
  sendEmail(cart,user)
  // Compile the Handlebars template
  const template = handlebars.compile(htmlTemplate);
  let total = 0
  cart.forEach(element => {
    total += (element.price * element.qty)
    if(element.installationFee){
      total += (500 * element.qty)
      element.installationFee = (500 * element.qty)
      element.total = (element.price * element.qty) + element.installationFee
    }else{
      element.installationFee = 0
      element.total = (element.price * element.qty) + element.installationFee
    }
  });
  // Render the template with the data
  const html = template({ user,cart,total,year });
  const mailOptions = {
    from: "Modern Interior Kenya <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
    subject: `MODERN INTERIOR KENYA` ,
    html:html,
  };

  transporter.verify((error, success) => {
    if (error) {
      console.log('Error verifying transporter:', error);
    } else {
      console.log('Transporter verified successfully');
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.send({ message: 'Email sent successfully to the office' });
    }
  });
})


//email to client
async function sendEmail(cart,user) {
  const htmlTemplate = fs.readFileSync('./confirm.html', 'utf-8');
  const template = handlebars.compile(htmlTemplate);
  let total = 0
  cart.forEach(element => {
    total += (element.price * element.qty)
    if(element.installationFee){
      total += (500 * element.qty)
      element.installationFee = (500 * element.qty)
      element.total = (element.price * element.qty) + element.installationFee
    }else{
      element.installationFee = 0
      element.total = (element.price * element.qty) + element.installationFee
    }
  });
  // Render the template with the data
  const html = template({ user,cart,total,year });

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: "gightkingss@gmail.com",
          pass: "uubswyiivxdiufql"
      },
  });

  // Send email
  const info = await transporter.sendMail({
      from: 'MODERN INTERIOR KENYA <sender@gmail.com> ',
      to: user.email,
      subject: 'Order Confirmation',
      html: html,

  });

  console.log('Email sent:', info.messageId);
}
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});