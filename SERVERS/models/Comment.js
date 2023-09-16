import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
})

export default mongoose.model('Comment', commentSchema)
