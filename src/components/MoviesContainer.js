import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Import Components
// import MovieCard from './MovieCard.js'

export default function MovieContainer() {
    const [movies, setMovies] = useState([])
    

    useEffect(() => {
        axios
            .get(`http://omdbapi.com/?s=star+wars&apikey=82e86859`)
            .then((res) => {
                // console.log('axios success:', res.data.Search)
                setMovies(res.data.Search)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                movies.map( movie => ( <MovieCard key={movie.imdbID} movie={movie} /> ) )
            }
        </div>
    )
}