const {Schema, model} = require('mongoose');

const usersSchema = new Schema({
    name: {
        type : String,
    },
    email:{
        type: String,
    },
    role: {
        type: Number,
        default: 1
    },
    picture: String,
    active:{
        type: Boolean,
        default: true
    },
    purchases:[{
        type:Schema.Types.ObjectId,
        ref: 'Purchase'
    }],
    email_verified: Boolean
})

usersSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

usersSchema.set('toJSON', {
    virtuals: true
});


module.exports = model('User', usersSchema)