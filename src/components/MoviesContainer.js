import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Styles
import { Container, Row } from "reactstrap";
import '../styles.css'

// Import Components
import MovieCard from './MovieCard.js'
import SearchBar from './SearchBar.js'

export default function MovieContainer() {
    const [movies, setMovies] = useState([])
    // const [title, setTitle] = useState([])

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
        <div className='search_movie_container'>
            <h1 className='title'>Shoppies Movie Nominations</h1>

            <SearchBar />

            <Container className='container'>
                <Row>
                    {
                        movies.map( movie => {
                            return <MovieCard key={movie.imdbID} movieInfo={movie} />
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
