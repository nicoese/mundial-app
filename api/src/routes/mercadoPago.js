const {Router} = require('express');
const router = Router();

router.get("/payment", async (req, res) => {
    try {
      const { tournamentid, userid, useremail } = req.query;
      const response = await PaymentService(price,);
      res.send(response.data.init_point);
    } catch (error) {
      res.send(error);
    }
  });
  
  export default router;