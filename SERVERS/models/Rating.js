import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
    rating: Number,
    date: {
        type: Date,
        default: Date.now,
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
})

export default mongoose.model('Rating', ratingSchema)
