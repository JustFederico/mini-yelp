import express from 'express'
import {
    getAllRestaurantHasTag,
    createRestaurantHasTag,
} from '../controllers/restaurantHasTagController.js'

const router = express.Router()

router.get('/restaurantHasTag', getAllRestaurantHasTag)
router.post('/restaurantHasTag', createRestaurantHasTag)

export default router
