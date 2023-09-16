import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function RestaurantDetail() {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        const fetchRestaurantDetail = async () => {
            try {
                const response = await fetch(
                    `https://mini-yelp.onrender.com/restaurants/${id}`
                )
                const data = await response.json()
                console.log('fetched data:', data)
                setRestaurant(data)
            } catch (error) {
                console.error('fetching error:', error)
            }
        }

        fetchRestaurantDetail()
    }, [id])

    if (!restaurant) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{restaurant.name} - details coming soon!</h1>
            {/* Other details here */}
        </div>
    )
}
