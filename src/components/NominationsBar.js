import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Styles
import {Card, CardImg, CardBody, CardTitle, CardText, Button, Col} from 'reactstrap';
import SideNav, { NavItem, NavText, } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles.css'


const NominationsBar = props => {


    return (

        <SideNav
            onSelect={(selected) => {
             // Add your code here
            }}
        >

            <SideNav.Toggle  />
            <SideNav.Nav defaultSelected="home" >
                <NavItem eventKey="home" >
                    <NavText className='navText'>Your Nominations</NavText>
                    <Col xs='6' md='4' xl='3' className='nominees_container'>
                        {
                            props.nomineeInfo.map( nominee => {
                                return (
                                    <div> {nominee} </div>
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
