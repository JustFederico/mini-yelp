import mongoose from 'mongoose'

const restaurantHasTagSchema = new mongoose.Schema({
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    tag_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }
})

export default mongoose.model('RestaurantHasTag', restaurantHasTagSchema)