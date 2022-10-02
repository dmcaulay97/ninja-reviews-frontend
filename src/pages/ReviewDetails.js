import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const ReviewDetails = () => {

    const { id } = useParams()
    const { loading, data, error } = useFetch('http://localhost:1337/api/reviews/' + id)

    if (loading) return <p>Loading...</p>
    if (data?.error) return <p>{data.error.name}: "{data.error.message}"</p>
    if (error) return <p>{error}</p>

    console.log(data.data.attributes.body)

    return (
        <div className="review-card">
            <div className='rating'>
                {data.data.attributes.rating}
            </div>
            <h2>{data.data.attributes.title}</h2>

            <small>console list</small>

            <p>{data.data.attributes.body}</p>
        </div>
    )
}

export default ReviewDetails