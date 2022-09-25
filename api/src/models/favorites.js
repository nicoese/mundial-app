const {Schema,model} = require('mongoose');

const favoritesSchema = new Schema({
    email:{
        type: String,
        required: true,
        ref: 'User'
    },
    products:[{
        type:Schema.Types.Mixed,
        ref: 'Product'
    }]
    })

    favoritesSchema.virtual('id').get(function(){
        return this._id.toHexString();
    });
    
    favoritesSchema.set('toJSON', {
        virtuals: true
    });

module.exports = model('Favorite',favoritesSchema)