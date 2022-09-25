const {Router, response} = require('express');
const router = Router();
const Favorites = require('../models/favorites')


router.post('/add',async (req,res,next)=>{
    try{
        const {userEmail,product} = req.body

        //get document with email and array products
        let user = await Favorites.find({email: userEmail})

        //if user never faved something we ask
        if(user.length === 0){
            let faved = new Favorites({
                email: userEmail,
                products: [product]
            })
            let result = await faved.save()
            return res.status(200).json(result)
        }

        //else we insert in the array of prods the new fav

        console.log(user[0].email)

        let arr = user[0].products

        //push my new fav product

        if(!arr.find(e=>e.name === product.name)){
            arr.push(product)
        }

        //set new array in favs

        let setFav = user[0].set({products: arr})
        
        let result = setFav.save()

        return res.status(200).json(setFav)
    }catch(err){
        next(err)
    }


})


router.get('/', async (req,res,next)=>{
    try{
        const {email} = req.query
        let result = await Favorites.find({email:email})
        res.status(200).send(result[0].products)
    }catch(err){
        next(err)
    }
})

router.get('/', async (req,res,next)=>{
    try{
        let result = await Favorites.find()
        res.status(200).send(result)
    }catch(err){
        next(err)
    }
})



router.put('/delete', async (req,res,next)=>{
    try{
        const {userEmail,productId} = req.body

        let user = await Favorites.find({email: userEmail})

        if (user.length !== 0){


            let filtered = user[0].products.filter(e=>e.id !== productId)

            let setFavs = user[0].set({products: filtered})

            let result = setFavs.save();

            return res.status(200).json(setFavs)
        }

    }catch(err){
        next(err)
    }

})



module.exports = router;