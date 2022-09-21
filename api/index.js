//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const mongoose = require("mongoose");
require('dotenv').config();



const {MONGO_URL, MONGO_USER, MONGO_PASS} = process.env


const mongooseOptions = {
    user: MONGO_USER,
    pass: MONGO_PASS
}

const PORT = process.env.PORT || 3001

mongoose.connect(MONGO_URL,
    mongooseOptions)
    .then(db => {
        console.log("mongo connect at", db.connection.host)
        server.listen(PORT, () => {
            console.log('%s listening at '+PORT); // eslint-disable-line no-console
        });
    })
    .catch(err => console.log(err))
