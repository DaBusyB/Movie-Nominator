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
    const [titleSearch, setTitleSearch] = useState(`star+wars`)

    const searchHandler = event => {
        setTitleSearch(event.target.value)
    }

    useEffect(() => {

        axios
        .get(`http://omdbapi.com/?s=${titleSearch}&apikey=82e86859`)
            .then((res) => {
                // console.log('axios success:', res.data.Search)
                setMovies(res.data.Search)
            })
            .catch((err) => {
                // setMovies(`${titleSearch} cannot be found, try again`)
            })
    }, [titleSearch])

    return (
        <div className='search_movie_container'>
            <h1 className='title'>Shoppies Movie Nominations</h1>

            <SearchBar handler={searchHandler}/>

            <Container className='container'>
                <Row>
                    {
                        movies === undefined ?
                            console.log('movies is undefined')
                        :
                            movies.map( movie => {
                                return <MovieCard key={movie.imdbID} movieInfo={movie} />
                            })
                        
                    }
                    
                </Row>
            </Container>
        </div>
    )
}
