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

    //normalize all search events by replacing spaces with '+'
    const normalizeData = event => {
        return event.replace(/\s/g, '+')
    }

    // search for our normalized event
    const searchHandler = event => {
        setTitleSearch(normalizeData(event.target.value))
    }

    const buttonHandler = (event) => {
        let nominationsArr = nominations;

        let movieTitle = event.target.nextElementSibling
        let moviePanelButton =  event.target

        const nominationsAdder = () => {
            if(!nominationsArr.includes(movieTitle.innerText)) {
                nominationsArr.push(movieTitle.innerText)
            }
        }

        const nominationsRemover = () => {
            if(nominationsArr.includes(movieTitle.innerText)) {
                nominationsArr = nominationsArr.filter(nominee => nominee !== movieTitle.innerText)
            }
        }

        const nominationsButtonHandler = () => {
            movieTitle.classList.remove('btn-secondary')

            if( (nominations.length >= 0 && nominations.length < 5 ) &&
            movieTitle.classList.contains('nominated') === false &&
            !nominationsArr.includes(movieTitle.innerText ) )
            {
                movieTitle.classList.add('nominated')
                moviePanelButton.classList.toggle('button_toggle')
                nominationsAdder()
                setNominations(nominationsArr)
            }

            else if(movieTitle.classList.contains('nominated') === true) {
                movieTitle.classList.remove('nominated')
                moviePanelButton.classList.toggle('button_toggle')
                nominationsRemover()
                setNominations(nominationsArr)
            }
        }
        nominationsButtonHandler(event)
    }

    useEffect(() => {
        axios
        .get(`https://omdbapi.com/?s=${titleSearch}&apikey=82e86859`)
            .then((res) => {

                res.data.Search === undefined ?
                    setTitleSearch(`star+wars`)
                :
                    setMovies(res.data.Search)
            })
            .catch((err) => {
                console.log('axios err:', err)
            })
    }, [titleSearch, nominations])

    return (
        <div className='movie_container'>
            <h1 className='title'>Movie Nominations</h1>

            <SearchBar handler={searchHandler}/>

            <NominationsBar
                className='nominationsBar'
                nomineeInfo={nominations}
            />
            <Container className='container'>
                <Row>

                    {
                        movies.map( movie => {
                            return (
                                <MoviePanel
                                    key={movie.imdbID}
                                    movieInfo={movie}
                                    handler={buttonHandler}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
