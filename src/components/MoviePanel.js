import React from 'react'
import PropTypes from 'prop-types'

// Styles
import {Card, CardImg, CardBody, CardTitle, Button, Col, Alert} from 'reactstrap';
import '../styles.css'

// Import Components
// import SelectButton from './SelectButton'

const MoviePanel = props => {


    return (
        <Col xs='6' md='4' xl='3'>
            <Card className='card'>
                <Button onClick={props.selector } className='movie_panel_button'></Button>
                <CardTitle>{props.movieInfo.Title} {props.movieInfo.Year}</CardTitle>
                <CardBody>
                    <CardImg top width='18.75%' src={props.movieInfo.Poster} alt='Movie poster picture' />
                </CardBody>
            </Card>
        </Col>
    )
}

Alert.propTypes = {
    className: PropTypes.string,
    closeClassName: PropTypes.string,
    isOpen: PropTypes.bool,  // default: true
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fade: PropTypes.bool, // default: true
    // Controls the transition of the alert fading in and out
    // See Fade for more details
    // transition: PropTypes.shape(Fade.propTypes),
  }

export default MoviePanel