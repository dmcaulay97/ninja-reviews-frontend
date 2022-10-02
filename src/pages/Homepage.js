import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const { loading, data, error } = useFetch('http://localhost:1337/api/reviews')

    console.log(data, loading, error)

    if (loading) return <p>Loading...</p>
    if (data?.error) return <p>{data.error.name}: "{data.error.message}"</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            {data.data.map(review => (
                <div key={review.id} className="review-card">
                    <div className='rating'>
                        {review.attributes.rating}
                    </div>
                    <h2>{review.attributes.title}</h2>

                    <small>console list</small>

                    <p>{review.attributes.body.substring(0, 200)}...</p>

                    <Link to={`/details/${review.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    )
}

export default Homepage