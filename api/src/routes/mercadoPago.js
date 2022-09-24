const {Router} = require('express');
const router = Router();
const PaymentService = require('../service/PaymentService.js')

router.post("/", async (req, res) => {
    try {


        const {products, email, totalPrice} = req.body;


        const response = await PaymentService(email, products);

        let link = response.data.init_point

        return res.send(link);
    } catch (error) {
        res.send(error);
    }
});


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