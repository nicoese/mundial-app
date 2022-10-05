const {Router, response} = require('express');
const router = Router();
const Purchase = require('../models/purchases')
const User = require('../models/users');


router.get('/:email', async (req, res, next) => {
    try {
        const {email} = req.params
        const user = await User.findOne({email: email})
        return res.json(user)

    } catch (err) {
        return res.status(400).json(err)
    }
})

router.get('/', async (req, res, next) => {

    //cuando me hago este get podria traerme la info de info_user?? y mando todo junto?
    // tambien depende de si hay info ahi o no...
    try {
        let result = await User.find()
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

//this route modifies user, you can modify your name or the img in your profile
//we can add more params in body for mods
router.put('/:userId/modify_user', async (req, res, next) => {
    try {
        const {userId} = req.params
        const {first_name, last_name, img} = req.body

        let updated_user = await User.findByIdAndUpdate(userId, {first_name, last_name, img})
        res.status(200).json(updated_user)
    } catch (err) {
        next(err);
    }
})

router.delete('/delete_user', async (req, res, next) => {
    try {
        const {email} = req.query
        let found = await User.findOneAndDelete({email})
        res.status(200).json(found)
    } catch (err) {
        next(err)
    }
})

router.put('/disable', async (req, res, next) => {
    try {
        const {email, active} = req.query
        let found = await User.findOneAndUpdate({email}, {active: active}, {new: true}) //new returns in found the updated document
        res.status(200).json(found)
    } catch (err) {
        next(err)
    }
})

// /users/disable

router.post('/add_user_to_db', async (req, res, next) => {
    try {
        const {name, email, role, picture, email_verified} = req.body.user

        let found = await User.find({email})
        if (found.length > 0) return res.status(400).send('user already in db')

        let newUser = new User({
            name,
            email,
            role,
            picture,
            email_verified
        })

        let saved = await newUser.save()

        // console.log(saved)

        return res.send(saved)
    } catch (err) {
        next(err)
    }
})


module.exports = router;