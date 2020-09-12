import React, {useState} from 'react'

// Styles
import SideNav from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles.css'


const NominationsBar = props => {
    const [nominees, setNominee] = useState(props.nomineeInfo)
    
    // console.log(nominees)
    

    return (

        <SideNav className='side_nav'>

            <SideNav.Toggle  />
            <SideNav.Nav >
                <h1 className='side_nav_title'>Nominees</h1>
                                
                <div className='nomineescontainer'>
                    {
                        props.nomineeInfo.map( nominee => {
                            return (
                                <button key={nominee} className='nominee_box'> {nominee} </button>
                            )
                        })
                    }
                </div>
            </SideNav.Nav>

        </SideNav>
    )
}

export default NominationsBar
