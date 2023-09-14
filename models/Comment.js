import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    text: String,
    date: Date,
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
})

export default mongoose.model('Comment', commentSchema)
