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
    gender:{
        type: String
    },
    full_name: String,
    phone_number: Number
    })

    infoSchema.virtual('id').get(function(){
        return this._id.toHexString();
    });
    
    infoSchema.set('toJSON', {
        virtuals: true
    });

module.exports = model('Info', infoSchema)