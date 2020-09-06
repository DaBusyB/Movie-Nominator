import React from 'react'

// Styles
import {FormGroup, Input, InputGroup} from 'reactstrap';

const SearchBar = props => {

    return (
        <div className='searchBar'>
            <FormGroup
            // className={searchFocus ? "focused" : ""}
            >
                <InputGroup className=" input-group-alternative mb-3">
                  {/* <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className=" ni ni-zoom-split-in">Search for a Movie</i>
                    </InputGroupText>
                  </InputGroupAddon> */}
                  <Input
                    className=" form-control-alternative"
                    placeholder="Search For a Movie!"
                    type="text"
                    onChange={props.handler}
                    
                    // onFocus={() => setSearchFocus(true)}
                    // onBlur={() => setSearchFocus(false)}
                  ></Input>
                </InputGroup>
              </FormGroup>
        </div>
    )
}

export default SearchBar