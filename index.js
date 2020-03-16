var nodemailer = require('nodemailer');
const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000
var morgan = require('morgan')
app.use(morgan("dev"))
var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
    user: 'caravellojulian@gmail.com', // Cambialo por tu email
    pass: 'wsml mvpl imgu fozq' // Cambialo por tu password
    }
    });
app.post("/",(req,res)=>{

console.log(req.body);
res.send("asd")

})
    app.post('/sendmail', (req, res) => {
      var mailOptions = {
        from: 'caravellojulian@gmail.com',
        to: 'nahuel.agustin2001@gmail.com',
        subject: 'caravellojulian@gmail.com',
        text: 'caravellojulian@gmail.com'
      };

      console.log(req.body);
      res.send(req.body)

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 




