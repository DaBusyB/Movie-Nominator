import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Styles
import {Card, CardImg, CardBody, CardTitle, CardText, Button, Col} from 'reactstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles.css'


const NominationsBar = props => {


    return (

        <SideNav
            onSelect={(selected) => {
             // Add your code here
            }}
        >

            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">

                <NavItem eventKey="home">
                    <Col xs='6' md='4' xl='3'>
                        {
                            props.nominationsInfo.map( nomination => {
                                return (
                                    <Card className='card'>
                                        <CardBody>
                                            <Button
                                                id='button'
                                                onClick={
                                                    props.button
                                                }
                                                className='movie_panel_button'>
                                                {/* onClick={console.log({props.movieInfo.Title}, {props.button}) */}
                                            </Button>
                                            <CardTitle className='cardTitle'>{props.nominationsInfo.Title} </CardTitle>
                                            <CardText className='cardYear'>{props.nominationsInfo.Year}</CardText>
                                            <CardImg top width='18.75%' src={props.nominationsInfo.Poster} alt='Movie poster picture' />
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default NominationsBar
