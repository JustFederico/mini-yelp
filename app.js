import 'dotenv/config'
import express from 'express'
import restaurantsRoutes from './routes/restaurantsRoutes.js'
import citiesRoutes from './routes/citiesRoutes.js'
import tagsRoutes from './routes/tagsRoutes.js'
import cors from 'cors'
import dbConnect from './dbConnect.js'

const app = express()
app.use(express.json())
app.use(cors())
dbConnect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

app.use('/', restaurantsRoutes)
app.use('/', citiesRoutes)
app.use('/', tagsRoutes)