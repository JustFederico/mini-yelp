import City from '../models/City.js'

export const getAllCities = async (req, res) => {
    try {
        const cities = await City.find()
        res.status(200).json(cities)
    } catch (error) {
        console.error('Error fetching all cities:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const createCity = async (req, res) => {
    try {
        const newCity = new City(req.body)
        const savedCity = await newCity.save()
        res.status(201).json(savedCity)
    } catch (error) {
        console.error('Error creating city:', error)
        res.status(400).send('Bad Request')
    }
}

export const getCityById = async (req, res) => {
    try {
        const city = await City.findById(req.params.id)
        res.status(200).json(city)
    } catch (error) {
        console.error('Error fetching city by id:', error)
        res.status(500).send('Internal Server Error')
    }
}


