const Accesories = require('./src/models/accesories')
const Jerseys = require('./src/models/jerseys')
const Tickets = require('./src/models/tickets')
const db = require('./db_updated.json')



const main = async ()=>{
    try{
        let acc = db.products.accessories
        let jer = db.products.jerseys
        let tick = db.products.tickets
        const resacc = await Accesories.insertMany(acc)
        const resjer = await Jerseys.insertMany(jer)
        const restick = await Tickets.insertMany(tick)
    }
    catch(err){
        console.log(err)
    }
}