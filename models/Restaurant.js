import mongoose from 'mongoose'

const restaurantSchema = new mongoose.Schema({
    name: String,
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }
})

export default mongoose.model('Restaurant', restaurantSchema)