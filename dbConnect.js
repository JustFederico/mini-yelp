import mongoose from 'mongoose'

const dbConnect = () => {
    const dbUri = process.env.MONGODB_URI
    mongoose.connect(dbUri)
    .then(() => {
        console.log('Connected to database.')
    })
    .catch((err) => {
        console.log('Error connecting to the database:', error)
    })
}

export default dbConnect