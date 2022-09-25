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
    email:{
        type: String,
    },
    username:{
        type: String
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
    },
    purchases:[{
        type:Schema.Types.ObjectId,
        ref: 'Purchase'
    }],
})

usersSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

usersSchema.set('toJSON', {
    virtuals: true
});


module.exports = model('User', usersSchema)