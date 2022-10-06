const {Schema,model} = require('mongoose');

const reviewsSchema = new Schema({
    date:{
        type: Date
    },
    email:{
        type: String,
        required: true,
        ref: 'User'
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    title: String,
    content: String,
    img: String,
    rating: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
    
    })

    reviewsSchema.virtual('id').get(function(){
        return this._id.toHexString();
    });
    
    reviewsSchema.set('toJSON', {
        virtuals: true
    });



module.exports = model('Review',reviewsSchema)