import Rating from '../models/Rating.js'

export const getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find()
        res.status(200).json(ratings)
    } catch (error) {
        console.error('Error fetching all ratings:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const createRating = async (req, res) => {
    try {
        const newRating = new Rating(req.body)
        const savedRating = await newRating.save()
        res.status(201).json(savedRating)
    } catch (error) {
        console.error('Error creating rating:', error)
        res.status(400).send('Bad Request')
    }
}
