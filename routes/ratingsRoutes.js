import express from 'express'
import {
    getAllRatings,
    createRating,
} from '../controllers/ratingsController.js'

const router = express.Router()

router.get('/ratings', getAllRatings)
router.post('/ratings', createRating)

export default router
