import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({
    name: String,
})

export default mongoose.model('City', citySchema)