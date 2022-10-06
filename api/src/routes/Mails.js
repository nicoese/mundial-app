const {Router, response} = require('express');
const router = Router();
const nodemailer = require('nodemailer')
const controller = require('../controllers/MailController')

//recibo el userEmail, Products
router.post('/purchase_success', async(req,res,next)=>{
    try{
        let {email,products,totalPrice,id,personalData} = req.body

        let transporter = await controller.create_transport()

        let body =  await controller.create_body(products,totalPrice,id,personalData)

        let mailOptions = await controller.mailOptions(email,body) //userEmail,subject,body

        transporter.sendMail(mailOptions,(err)=>{
            if(err){
                return res.status(500).send(err.message)
            }else{
                console.log('email enviado')
                return res.status(200).send('email enviado')
            }
        })

    }catch(err){
        next(err)
    }

})







module.exports = router;