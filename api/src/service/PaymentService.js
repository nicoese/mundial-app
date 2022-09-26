const axios = require("axios");

async function PaymentService(userEmail,items) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: userEmail,
      items: items.map(e => {return {
        title: "detalle",
        description: "Productos de MundiApp",
        picture_url: e.img,
        category_id: "category123",
        quantity: e.cantidad,
        unit_price: e.price,
      }})
      ,
      back_urls: {
        failure: `${process.env.CLIENT_URL}/cart`,
        pending: `${process.env.CLIENT_URL}/cart`,
        success: `${process.env.CLIENT_URL}/purchases/success`
      }
      
    };

    // const body = {
    //   payer_email: userEmail,
    //   items: items.map(e => {
    //     return { 
    //     title: e.name,
    //     description: "Productos de MundiApp",
    //     picture_url: "http://www.myapp.com/myimage.jpg",
    //     category_id: "category123",
    //     quantity: 1,
    //     unit_price: e.price,
    //     }})
    //   ,
    //   back_urls: {
    //     failure: "/failure",
    //     pending: "/pending",
    //     success: `${process.env.CLIENT_URL}`
    //   }
      
    // };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    console.log(payment.data)

    return payment;
  }

// CLIENT_URL=www.mundi-app.tk
// ACCESS_TOKEN=APP_USR-6804717935567762-092201-d70745a657fed9dae04c97084617a743-129914721
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

module.exports = PaymentService;