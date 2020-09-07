import React from 'react'

// Styles
import {Card, CardImg, CardBody, CardTitle, Button, Col} from 'reactstrap';
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
                    onClick={props.button} 
                    className='movie_panel_button'>

                    {/* onClick={console.log({props.movieInfo.Title}, {props.button}) */}
                </Button>

                <CardTitle className='cardTitle'>{props.movieInfo.Title} ({props.movieInfo.Year})</CardTitle>
                    <CardImg top width='18.75%' src={props.movieInfo.Poster} alt='Movie poster picture' />
                </CardBody>
            </Card>
        </Col>
    )
}


export default MoviePanel