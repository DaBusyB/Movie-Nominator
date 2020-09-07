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
    // const [nominationSearch, setNominationSearch] = useState([])

    var nominationsArr=[];

    //normalize all search events by replacing spaces with '+'
    const normalizeData = event => {
        return event.replace(/\s/g, '+')
    }

    // search for our normalized event
    const searchHandler = event => {
        setTitleSearch(normalizeData(event.target.value))
    }

const handler = (event) => {
    let eventTarget = event.target.nextElementSibling

    const nominationsAdder = () => {
        nominationsArr.push(eventTarget.innerText)
        return nominationsArr
    }

    const nominationsRemover = () => {
        nominationsArr.filter((nominees, index, arr) => index !== arr.indexOf(eventTarget.innerText))
        return nominationsArr
    }

    const nominationsButtonHandler = () => {
        eventTarget.classList.remove('btn-secondary')

        if( eventTarget.classList.contains('nominated') === false) {
            eventTarget.classList.add('nominated')
            event.target.classList.toggle('button_toggle')
            nominationsAdder()
            setNominations(nominationsArr)
        }
        else if(eventTarget.classList.contains('nominated') === true) {
            event.target.classList.toggle('button_toggle')
            eventTarget.classList.remove('nominated')
            nominationsRemover()
            setNominations(nominationsArr)
        }
    }

    nominationsButtonHandler(event)
}
// console.log('nominationSearch', nominationSearch)

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

    // useEffect(() => {
    //     axios
    //     .get(`http://omdbapi.com/?s=${nominationSearch}&apikey=82e86859`)
    //         .then((res) => {
    //             console.log('nominations', res.data.Search)
    //             setNominations(res.data.Search)
    //         })
    //         .catch((err) => {
    //             console.log('axios err:', err)
    //             // setMovies(`${titleSearch} cannot be found, try again`)
    //         })
    // }, [nominationSearch])

    return (
        <div className='movie_container'>
            <h1 className='title'>Shoppies Movie Nominations</h1>

            <SearchBar handler={searchHandler}/>

            <Container className='container'>
                <Row>
                    <NominationsBar
                        className='nominationsBar'
                        nomineeInfo={nominations}
                    />

                    {
                        movies.map( movie => {
                            return (
                                <MoviePanel
                                    key={movie.imdbID}
                                    movieInfo={movie}
                                    handler={handler}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
