import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Styles
import { Container, Row} from "reactstrap";
import '../styles.css'

// Import Components
import MoviePanel from './MoviePanel.js'
import SearchBar from './SearchBar.js'
import NominationsBar from './NominationsBar'

export default function MovieContainer() {
    const [movies, setMovies] = useState([])
    const [titleSearch, setTitleSearch] = useState([])

    const [nominations, setNominations] = useState([])
    const [nominationSearch, setNominationSearch] = useState()

    //normalize all search events by replacing spaces with '+'
    const normalizeData = event => {
        return event.replace(/\s/g, '+')
    }

    // search for our normalized event
    const searchHandler = event => {
        setTitleSearch(normalizeData(event.target.value))
    }

    let count = 0;
    const nominationsButton = event => {
        event.target.classList.remove('btn-secondary')

        setNominationSearch(normalizeData(event.target.nextElementSibling.innerText))

        if(count >= 0 && count < 5 && event.target.classList.contains('counted') === false) {
            event.target.classList.toggle('button_toggle')
            event.target.classList.add('counted')

            count++
        } else if(event.target.classList.contains('counted') === true) {
            // console.log('removeindex', nominationsArr, `index is ${nominationsArr.indexOf(cardTitle)}`)
            // delete nominationsArr[]
            event.target.classList.remove('counted')
            count--
        }
    }

    useEffect(() => {
        axios
        .get(`http://omdbapi.com/?s=${titleSearch}&apikey=82e86859`)
            .then((res) => {
                // console.log('axios success:', res.data.Search)

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

    useEffect(() => {
        axios
        .get(`http://omdbapi.com/?s=${nominationSearch}&apikey=82e86859`)
            .then((res) => {
                console.log('nominations', res.data.Search)
                setNominations(res.data.Search)
            })
            .catch((err) => {
                console.log('axios err:', err)
                // setMovies(`${titleSearch} cannot be found, try again`)
            })
    }, [nominationSearch])

    return (
        <div className='search_movie_container'>
            <h1 className='title'>Shoppies Movie Nominations</h1>

            <SearchBar handler={searchHandler}/>

            <Container className='container'>
                <Row>
                    <NominationsBar className='nominationsBar' nominationsInfo={nominations}/>

                    {
                        movies.map( movie => {
                            return (
                                <MoviePanel key={movie.imdbID} movieInfo={movie} button={nominationsButton} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
