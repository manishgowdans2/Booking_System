import React,{useRef} from 'react'
import "./searchBar.css"
import {Col, Form, FormGroup} from 'reactstrap'

const SearchBar = () => {
     
    const loactionRef = useRef('')
    const distanceRef = useRef(0)
    const maxPeopleRef=useRef(0)


    const searchHandler = () =>
    {
        const location = loactionRef.current.value
        const distance = distanceRef.current.value
        const maxPeople = maxPeopleRef.current.value


        if(location === "" || distance === "" || maxPeople === "")
        {
            return alert("All fields are required")
        }
    }




  return (
    <Col lg='12'>
        <div className="search_bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form_group from_group-fast'>
                    <span>
                        <i class='ri-map-pin-line'>
                        </i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type='text' placeholder='Where are you going?' ref={loactionRef}/>
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form_group from_group-fast'>
                    <span>
                        <i class='ri-map-pin-time-line'>
                        </i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type='number' placeholder='Distance Km?' ref={distanceRef}/>
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form_group from_group-fast'>
                    <span>
                        <i class='ri-group-line'>
                        </i>
                    </span>
                    <div>
                        <h6>Max. People</h6>
                        <input type='number' placeholder='0' ref={maxPeopleRef}/>
                    </div>
                </FormGroup>

                <span className='search_icon' type='submit' onClick={searchHandler}>
                    <i class='ri-search-line'></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar