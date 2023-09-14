import express from 'express'
import { getAllCities, createCity, getCityById } from "../controllers/citiesController.js"

const router = express.Router()

router.get('/cities', getAllCities)
router.post('/cities', createCity)
router.get('/cities/:id', getCityById)

export default router