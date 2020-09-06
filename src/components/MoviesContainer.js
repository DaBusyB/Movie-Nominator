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

    //normalize all search events by replacing spaces with '+'
    const normalizeSearchData = event => {
        return event.replace(/\s/g, '+')
    }

    // search for our normalized event
    const searchHandler = event => {
        console.log('search handler:', event.target.value)
        setTitleSearch(normalizeSearchData(event.target.value))
    }

    useEffect(() => {
        axios
        .get(`http://omdbapi.com/?s=${titleSearch}&apikey=82e86859`)
            .then((res) => {
                console.log('axios success:', res.data.Search)
                
                res.data.Search === undefined ?
                    // res.data.Search will be undefined at times while searching
                    // here we provide something for users to see until search returns something
                    setTitleSearch(`star+wars`)
                :
                    setMovies(res.data.Search)
            })
            .catch((err) => {
                // console.log('axios err:', err)
                // setMovies(`${titleSearch} cannot be found, try again`)
            })
    }, [titleSearch])

    // useEffect(() => {

    //     axios
    //     .get(`http://omdbapi.com/?s=${black panther}&apikey=82e86859`)
    //         .then((res) => {
    //             // console.log('axios success:', res.data.Search)
                
    //         })
    //         .catch((err) => {
    //             // setMovies(`${titleSearch} cannot be found, try again`)
    //         })
    // }, [])

    return (
        <div className='search_movie_container'>
            <h1 className='title'>Shoppies Movie Nominations</h1>

            <SearchBar handler={searchHandler}/>

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
