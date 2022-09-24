const {Router} = require('express');
const Purchase = require('../models/purchases.js');
const router = Router();
const PaymentService = require('../service/PaymentService.js')

router.post("/", async (req, res) => {
    try {


        //MP OPERATIONS CREATE A NEW PAYMENT
        const {products, email, totalPrice} = req.body;
        const response = await PaymentService(email, products);
        let link = response.data.init_point

        //MONGO OPERATIONS SAVE PENDING PURCHASE
        let purchase = new Purchase({
            email,
            products:[...products],
            totalPrice
        })
        const savedPurchase = await purchase.save();

        //RETURN PAYMENT LINK
        return res.send(link);
    } catch (error) {
        res.send(error);
    }
});

    /*
            test user Comprador MP
        MAIL: test_user_43321909@testuser.com 
        USER: TETE3052091
        PASSWORD: kEbwVb0wdD

        test VENDEDOR
        MAIL: test_user_45818772@testuser.com
        USUARIO: TEST3EKGSFBZ
        PASSWORD: Uf4fmqx0KE
    */

//   {
//     "id": 1203699430,
//     "nickname": "TESTIXZS4XGN",
//     "password": "USndyFvVzg",
//     "site_status": "active",
//     "email": "test_user_29946263@testuser.com"
// }

// {
//   "id": 1203698211,
//   "nickname": "TETE1258060",
//   "password": "og1AXV51FL",
//   "site_status": "active",
//   "email": "test_user_51813153@testuser.com"
// }

module.exports = router;