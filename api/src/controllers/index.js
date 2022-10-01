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

async function detail (id) {
    try {
        const jersey = await Jerseys.find();
        const accesories = await Accesories.find();
        const tickets = await Tickets.find();
        let arr = [...jersey,...accesories,...tickets]
        arr = arr.filter(e => e._id == id)
        return arr
    } catch (error) {
        console.log(error)
    }
}

const postProducts = async (produc) => {
    let a = produc
    if(a.type === 'jersey') {
        if(!a.stock && !a.brand){
            const product = new Products({
             name: a.name,
             price: a.price,
             type: a.type,
             img: a.img,
             stock: {S:0,M:0,L:0,XL:0},
             brand: 'Nike',
             description: "Camiseta del Mundial Qatar 2022. Millones de fanáticos alrededor del planeta ya empiezan a soñar con los partidos y pensar en cómo podría ser el camino de su equipo al máximo trofeo que existe en el plano futbolístico",
             stadium: a.stadium,
             date: a.date,
             sector: a.sector,
            })
            await product.save()
        }
        else if(!a.stock){
         const product = new Products({
          name: a.name,
          price: a.price,
          type: a.type,
          img: a.img,
          stock: {S:0,M:0,L:0,XL:0},
          brand: a.brand,
          description: "Camiseta del Mundial Qatar 2022. Millones de fanáticos alrededor del planeta ya empiezan a soñar con los partidos y pensar en cómo podría ser el camino de su equipo al máximo trofeo que existe en el plano futbolístico",
          stadium: a.stadium,
          date: a.date,
          sector: a.sector,
         })
         await product.save()
     } else if (!a.brand){
             const product = new Products({
              name: a.name,
              price: a.price,
              type: a.type,
              img: a.img,
              stock: a.stock,
              brand: 'Nike',
              description: "Camiseta del Mundial Qatar 2022. Millones de fanáticos alrededor del planeta ya empiezan a soñar con los partidos y pensar en cómo podría ser el camino de su equipo al máximo trofeo que existe en el plano futbolístico",
              stadium: a.stadium,
              date: a.date,
              sector: a.sector,
             })
             await product.save()
     } else {
         const product = new Products({
          name: a.name,
          price: a.price,
          type: a.type,
          img: a.img,
          stock: a.stock,
          brand: a.brand,
          description: "Camiseta del Mundial Qatar 2022. Millones de fanáticos alrededor del planeta ya empiezan a soñar con los partidos y pensar en cómo podría ser el camino de su equipo al máximo trofeo que existe en el plano futbolístico",
          stadium: a.stadium,
          date: a.date,
          sector: a.sector,
         })
         await product.save()
     }
    } else if (a.type === 'accessory') {
     if (!a.stock){
             const product = new Products({
              name: a.name,
              price: a.price,
              type: a.type,
              img: a.img,
              stock: {X:0},
              brand: a.brand,
              description: "Accesorio oficial del Mundial Qatar 2022",
              stadium: a.stadium,
              date: a.date,
              sector: a.sector,
             })
             await product.save()
     } else {
         const product = new Products({
             name: a.name,
             price: a.price,
             type: a.type,
             img: a.img,
             stock: a.stock,
             brand: a.brand,
             description: "Accesorio oficial del Mundial Qatar 2022",
             stadium: a.stadium,
             date: a.date,
             sector: a.sector,
            })
            await product.save()
     }
    } else if (a.type === 'ticket'){
     if (!a.sector) {
         const product = new Products({
             name: a.name,
             price: a.price,
             type: a.type,
             img: a.img,
             stock: a.stock,
             brand: a.brand,
             description: "Ticket oficial del Mundial Qatar 2022 ",
             stadium: a.stadium,
             date: a.date,
             sector: "Category 3",
            })
            await product.save()
     } else if (!a.stock){
         const product = new Products({
             name: a.name,
             price: a.price,
             type: a.type,
             img: a.img,
             stock: {X:0},
             brand: a.brand,
             description: "Ticket oficial del Mundial Qatar 2022 ",
             stadium: a.stadium,
             date: a.date,
             sector: "Category 3",
            })
            await product.save()
     } else {
         const product = new Products({
             name: a.name,
             price: a.price,
             type: a.type,
             img: a.img,
             stock: a.stock,
             brand: a.brand,
             description: "Ticket oficial del Mundial Qatar 2022 ",
             stadium: a.stadium,
             date: a.date,
             sector: a.sector,
            })
            await product.save()
     }
    }

}

module.exports = {
    search,
    filter,
    detail,
    postProducts,


}
