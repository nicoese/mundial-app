const {Router} = require('express');
const Review = require('../models/reviews')
const router = Router();
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', async (req,res,next)=>{
    try{
        let{id,email} = req.query
        //get all revs from product
        if(id){
            let result = await Review.find({productId: ObjectId(id)})
            if (result.length === 0){
                return res.status(400).send('There are no reviews of this product');
            }
            
            return res.status(200).json(result) 
        }

        //get all revs from user
        if(email){
            let result = await Review.find({email: email}).populate('productId')
            if (result.length === 0){
                return res.status(400).send('There are no reviews of this user');
            }
            return res.status(200).json(result) 
        }

        //no query get all revs in general
        let result = await Review.find()
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})


router.post('/add_review', async (req,res,next)=>{
    try{
        let {email,productId,title,content,img,rating} = req.body

        let already_reviewed = await Review.find({$and:[{email},{productId}]})
        
        if(already_reviewed.length > 0) return res.status(400).send('Product Already Reviewed')

        let date = new Date()

        let review = new Review({
            date: date,
            email,
            productId,
            title,
            content,
            img,
            rating
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
        // let review = await Review.findOneAndUpdate({$and:[{email},{productId}]},{title,content,img,rating})

        let modify = review[0].update({title,content,img,rating}) //testear esto

        let result = modify.save()

        res.status(200).json(result)

    }catch(err){
        next(err)
    }
})

module.exports = router;