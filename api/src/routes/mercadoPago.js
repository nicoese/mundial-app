const {Router} = require('express');
const router = Router();
const PaymentService = require('../service/PaymentService.js')

router.get("/", async (req, res) => {
    try {
      const {userEmail } = req.query.userEmail;
      const items  = req.body;
      const response = await PaymentService(userEmail,items);
      console.log(response.data)
      return res.send(response.data.init_point);
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

module.exports= router;