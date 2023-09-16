import { useEffect, useState } from 'react'

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState(null)

    // fetch all restaurants from the database
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('https://mini-yelp.onrender.com/restaurants')
                const data = await response.json()
                console.log('fetched data:', data)
                setRestaurants(data)
            }
            catch (error) {
                console.error('fetching error:', error)
            }
        }

        fetchRestaurants()
    }, [])
            

    // Handle loading or empty state
    if (!restaurants) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1 className='title'>Restaurants</h1>
            {restaurants.map((restaurant, index) => (
                <div key={index}>
                    <p>{restaurant.name}</p>
                </div>
            ))}
        </div>
    )
}
