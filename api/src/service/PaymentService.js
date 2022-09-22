const axios = require("axios");

class PaymentService {
  async createPayment(price) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_46945293@testuser.com",
      items: [
        {
          title: "Carrito de compra de MundiApp",
          description: "Una seleccion de producto/s que usted elijío",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: price
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: `${process.env.CLIENT_URL}`
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }
}

// CLIENT_URL=www.mundi-app.tk/products
// ACCESS_TOKEN=APP_USR-6804717935567762-092201-d70745a657fed9dae04c97084617a743-129914721

module.exports = PaymentService;