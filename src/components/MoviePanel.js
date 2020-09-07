import React from 'react'

// Styles
import {Card, CardImg, CardBody, CardTitle, CardText, Button, Col} from 'reactstrap';
import '../styles.css'

// Import Components
// import SelectButton from './SelectButton'

const MoviePanel = props => {


    return (
        <Col xs='6' md='4' xl='3'>
            <Card className='card'>
                <CardBody>
                    <Button
                        id='button'
                        onClick={props.handler }
                        className='movie_panel_button'
                    >
                    </Button>

                    <CardTitle className= {props.movieInfo.imdbID}> {props.movieInfo.Title} </CardTitle>
                    <CardText className='cardYear'>{props.movieInfo.Year}</CardText>
                    <CardImg top width='18.75%' src={props.movieInfo.Poster} alt='Movie poster picture' />
                </CardBody>
            </Card>
        </Col>
    )
}


export default MoviePanel