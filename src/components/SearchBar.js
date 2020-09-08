import React from 'react'

// Styles
import {FormGroup, Input, InputGroup} from 'reactstrap';

const SearchBar = props => {


    return (
        <div className='searchBar'>
            <FormGroup
            >
                <InputGroup className=" input-group-alternative mb-3">

                  <Input
                    className=" form-control-alternative"
                    placeholder="Search Movie Titles to Nominate!"
                    type="text"
                    onChange={props.handler}

                  ></Input>

                </InputGroup>
              </FormGroup>
        </div>
    )
}

export default SearchBar