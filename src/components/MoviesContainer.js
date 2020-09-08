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

    const nominationsArr = nominations;

    //normalize all search events by replacing spaces with '+'
    const normalizeData = event => {
        return event.replace(/\s/g, '+')
    }

    // search for our normalized event
    const searchHandler = event => {
        setTitleSearch(normalizeData(event.target.value))
    }

    const handler = (event) => {
        let movieTitle = event.target.nextElementSibling
        let moviePanelButton =  event.target

        const nominationsAdder = () => {
            return nominationsArr.push(movieTitle.innerText)
        }

        const nominationsRemover = () => {
            return nominationsArr.filter((_nominees, index, arr) => index !== arr.indexOf(movieTitle.innerText))
        }
    // console.log('here 2', nominations)

        const nominationsButtonHandler = () => {
            movieTitle.classList.remove('btn-secondary')

                if( (nominations.length >= 0 && nominations.length <= 5) && movieTitle.classList.contains('nominated') === false) {
                    movieTitle.classList.add('nominated')
                    moviePanelButton.classList.toggle('button_toggle')
                    nominationsAdder()
                    setNominations(nominationsArr)
                    console.log(nominationsArr)
                }
            else if(movieTitle.classList.contains('nominated') === true) {
                movieTitle.classList.remove('nominated')
                moviePanelButton.classList.toggle('button_toggle')
                nominationsRemover()
                setNominations(nominationsArr)
                console.log(nominationsArr)
            }
        }

        nominationsButtonHandler(event)
    }

    useEffect(() => {
        axios
        .get(`https://omdbapi.com/?s=${titleSearch}&apikey=82e86859`)
            .then((res) => {

                res.data.Search === undefined ?
                    // res.data.Search will be undefined at times while searching
                    // here we provide something for users to see until search returns something
                    setTitleSearch(`star+wars`)
                :
                    setMovies(res.data.Search)
            })
            .catch((err) => {
                console.log('axios err:', err)
            })
    }, [titleSearch])

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
