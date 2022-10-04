const {Schema,model} = require('mongoose');

const infoSchema = new Schema({
    email:{
        type: String,
        required: true,
        ref: 'User'
    },
    address:{
        type:String
    },
    city:{
        type: String
    },
    country:{
        type: String
    },
    apartment:{
        type: String
    },
    postalCode:{
        type: String
    },
    name: String,
    phoneNumber: Number
    
    })


    infoSchema.virtual('id').get(function(){
        return this._id.toHexString();
    });
    
    infoSchema.set('toJSON', {
        virtuals: true
    });

module.exports = model('Info', infoSchema)