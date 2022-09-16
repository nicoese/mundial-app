require('../app')
const Jerseys = require ('../models/jerseys');
const Accesories = require ('../models/accesories');
const Tickets = require ('../models/tickets')

async function search(name){
    const jersey = await Jerseys.find({name: {
        $regex: name,$options:"i"
    } });
    const accesories = await Accesories.find({name: {
        $regex: name,$options:"i"
    } });
    const tickets = await Tickets.find({name: {
        $regex: name,$options:"i"
    } });
    const all = [...jersey,...accesories,...tickets]
    return all
}

async function filter(type){
    if(type.toLowerCase() === 'accesories'){
    const filt = await Accesories.find()
    return filt
    } else if (type.toLowerCase() === 'jerseys'){
    const filt = await Jerseys.find()
    return filt
    } else if (type.toLowerCase() === 'tickets'){
    const filt = await Tickets.find()
    return filt
    }
    
}

module.exports = {
    search,
    filter,


}
