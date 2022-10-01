import nodemailer from 'nodemailer';
import config from "../config/config.js"


/************ REVISAR SI ACCEDE CON LAS VARIABLES DE ENTORNO *************/

const transporter = process.env.NODE_ENV= "prod" ? nodemailer.createTransport({
   service:"Gmail",
    auth: {
      user: config.EMAIL,
      pass: config.EMAIL_PASS
    },
}) : nodemailer.createTransport({
   host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: config.EMAIL,
      pass: config.EMAIL_PASS
    }
})



 
 /*******************************ENVIAR MAIL **********************/
export default async function enviarMail( destinatario , mensaje) {


 const mailOptions = {
   from: config.EMAIL,
   to: destinatario,
   subject: 'Mail de prueba desde Node.js',
   html: mensaje
}

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
 } catch (error) {
    console.log(error)
 }
}

