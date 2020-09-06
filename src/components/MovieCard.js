import React from 'react'

// Styles
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';
import '../styles.css'

// Import Components
// import SelectButton from './SelectButton'

const MovieCard = props => {


    return (
        <Col xs='6' md='4' xl='3'>
            <Card className='card'>
                <CardTitle>{props.movieInfo.Title}</CardTitle>
                <CardBody>
                    <CardImg top width='18.75%' src={props.movieInfo.Poster} alt='Movie poster picture' />
                    <CardSubtitle>{props.movieInfo.Year}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default MovieCard