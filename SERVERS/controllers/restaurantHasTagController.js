import RestaurantHasTag from '../models/RestaurantHasTag.js'

export const getAllRestaurantHasTag = async (req, res) => {
    try {
        const restaurantHasTag = await RestaurantHasTag.find()
        res.status(200).json(restaurantHasTag)
    } catch (error) {
        console.error('Error fetching all RestaurantHasTag:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const createRestaurantHasTag = async (req, res) => {
    try {
        const newRestaurantHasTag = new RestaurantHasTag(req.body)
        const savedRestaurantHasTag = await newRestaurantHasTag.save()
        res.status(201).json(savedRestaurantHasTag)
    } catch (error) {
        console.error('Error creating a RestaurantHasTag:', error)
        res.status(400).send('Bad Request')
    }
}

