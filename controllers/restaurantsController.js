import Restaurant from '../models/Restaurant.js'

export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.status(200).json(restaurants)
    } catch (error) {
        console.error('Error fetching all restaurants:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = new Restaurant(req.body)
        const savedRestaurant = await newRestaurant.save()
        res.status(201).json(savedRestaurant)
    } catch (error) {
        console.error('Error creating restaurant:', error)
        res.status(400).send('Bad Request')
    }
}

export const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        res.status(200).json(restaurant)
    } catch (error) {
        console.error('Error fetching restaurant by id:', error)
        res.status(500).send('Internal Server Error')
    }
}
