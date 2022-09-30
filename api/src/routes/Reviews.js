const {Router} = require('express');
const Review = require('../models/reviews')
const router = Router();


router.get('/', async (req,res,next)=>{
    try{
        let{id} = req.query

        let result = await Reviews.find({product: id})
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})


router.post('/add_review', async (req,res,next)=>{
    try{
        let {email,productId,title,content,img,rating} = req.body //???

        let already_reviewed = await Review.find({$and:[{email},{productId}]})
        
        if(already_reviewed.length > 0) throw new Error('Product Already Reviewed')

        let date = new Date()

        let review = new Review({
            date: date,
            email,
            productId,
            title,
            content,
            img,
            rating,
            likes,
            dislikes 
        })
        let result = await review.save()

        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})


router.post('/modify_review', async (req,res,next)=>{
    try{
        let {email,productId,title,content,img,rating} = req.body

        let review = await Review.find({$and:[{email},{productId}]})

        let modify = review[0].set({title,content,img,rating})

        let result = modify.save()

        res.status(200).json(result)

    }catch(err){
        next(err)
    }
})

module.exports = router;