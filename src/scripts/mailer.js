import nodemailer from 'nodemailer';
import config from "../config/config.js"


/************ REVISAR SI ACCEDE CON LAS VARIABLES DE ENTORNO *************/

const transporter = nodemailer.createTransport({
   service:"Gmail",
    auth: {
      user: config.EMAIL,
      pass: config.EMAIL_PASS
    },
});

const mailOptions = {
    from: config.EMAIL,
    to: "rkenshin.2010@gmail.com",
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
 }

 
 /*******************************ENVIAR MAIL **********************/
async function enviarMail() {
 try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
 } catch (error) {
    console.log(error)
 }
}

enviarMail()