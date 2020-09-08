import React from 'react'

// Styles
import SideNav from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles.css'


const NominationsBar = props => {
    // const [nominees, setNominee] = useState([])
    // setNominee(props.nomineeInfo)

    return (

        <SideNav className='side_nav'>

            <SideNav.Toggle  />
            <SideNav.Nav >
                <h1 className='side_nav_title'>Nominees</h1>
                                {console.log('props', props.nomineeInfo)}
                <div className='nomineescontainer'>
                    {
                        props.nomineeInfo.map( nominee => {
                            return (
                                <button className='nominee_box'> {nominee} </button>
                            )
                        })
                    }
                </div>
            </SideNav.Nav>

        </SideNav>
    )
}

export default NominationsBar
