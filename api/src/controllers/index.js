require('../app')
const Jerseys = require ('../models/jerseys');
const Accesories = require ('../models/accesories');
const Tickets = require ('../models/tickets');
const Products = require('../models/products');

async function search(name){
    const all = await Products.find({name: {
        $regex: name,$options:"i"
    } });
    return all
}

async function filter(type){
    let all= await allProducts()
    const filt = all.filter(e => e.type== type)
    return filt
    
}

async function detail (id) {
    try {
       let arr = await allProducts()
        arr = arr.filter(e => e._id == id)
        return arr
    } catch (error) {
        console.log(error)
    }
}

async function allProducts () {
    const all = await Products.find();
    return all
}

module.exports = {
    search,
    filter,
    detail,


}
