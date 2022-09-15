const {Schema, model} = require('mongoose');

const usersSchema = new Schema({
    first_name:{
    type : String,
    require:true
    },
    last_name: {
        type : String,
        require:true
        },
    role: {
        type: Number,
        default: 1
    },
    img: String,
    active:{
        type: Boolean,
        default: true
    },
    points:{
        type: Number,
        default: 0
    }

})

module.exports = model('User', usersSchema)