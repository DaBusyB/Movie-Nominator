import React, {useEffect, useState} from 'react'

// Styles
import {Col} from 'reactstrap';
import SideNav, { NavItem, NavText, } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles.css'


const NominationsBar = props => {
    // const [nominees, setNominee] = useState([])
    // setNominee(props.nomineeInfo)

    return (

        <SideNav>

            <SideNav.Toggle  />
            <SideNav.Nav >
                <h1>Nominees</h1>
                                {console.log('props', props.nomineeInfo)}
                <div>
                    {
                        props.nomineeInfo.map( nominee => {
                            return (
                                <button className='nominees_btn'> {nominee} </button>
                            )
                        })
                    }
                </div>
            </SideNav.Nav>

        </SideNav>
    )
}

export default NominationsBar
