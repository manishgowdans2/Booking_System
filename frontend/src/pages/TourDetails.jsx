import React, { useRef, useState } from 'react'
import "../styles/tourDetails.css"
import { Container, Col, Row, Form, ListGroup } from 'reactstrap'
import { useParams } from "react-router-dom"
import tourData from "../assets/data/tours"

import calculateAvgRating from "../utils/avgRating"
import avatar from "../assets/images/avatar.jpg"

import Booking from '../components/Booking'
import Newsletter from "../shared/Newsletter"

const TourDetails = () => {

  const { id } = useParams()

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  //now being used is a static data, later we will call our API services to load our data from the database
  const tour = tourData.find(tour => tour.id === id)

  //destructure properties from our tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews);//if reviews is not passed then it shows NaN

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" }

  //submit the request to the api
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    //check once:
    alert(`${reviewText}, ${tourRating}`)

    //then implement the api
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className='tour_content'>
                <img src={photo} />

                <div className="tour_info">
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour_rating d-flex align-items-center gap-1'>
                      <i className='ri-star-fill' style={{ color: "var(--secondary-color" }}></i>
                      {/* {calculateAvgRating===0?null:avgRating}
                    {
                        totalRating===0?"Not yet rated": <span>
                        ({reviews.length})
                    </span>
                    } */}


                      {avgRating === 0 ? null : avgRating}
                      {
                        totalRating === 0 ? "Not yet rated" : <span>
                          ({reviews.length})
                        </span>
                      }

                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i>{address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span><i class="ri-map-pin-2-line"></i>{city}</span>

                    <span><i class="ri-money-dollar-circle-line"></i>{price}</span>

                    <span><i class="ri-map-pin-time-line"></i>{distance} k/m</span>

                    <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
                  </div>


                  <h5>Description</h5>
                  <p>{desc}</p>

                </div>

                {/* Reviews Section */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                      <span oncClick={() => setTourRating(1)}>
                        1 <i class="ri-star-s-fill" />
                      </span>

                      <span oncClick={() => setTourRating(2)}>
                        2 <i class="ri-star-s-fill" />
                      </span>

                      <span oncClick={() => setTourRating(3)}>
                        3 <i class="ri-star-s-fill" />
                      </span>

                      <span oncClick={() => setTourRating(4)}>
                        4 <i class="ri-star-s-fill" />
                      </span>

                      <span oncClick={() => setTourRating(5)}>
                        5 <i class="ri-star-s-fill" />
                      </span>
                    </div>

                    <div className="review_input">
                      <input type='text' ref={reviewMsgRef} placeholder='Please share your reviews' required />

                      <button className="btn primary__btn text_white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user_reviews'>
                    {
                      reviews?.map(review => (
                        <div className='review_item'>
                          <img src={avatar} />

                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>Name</h5>
                                <p>{new Date("01-18-2023").toLocaleDateString("en-US", options)}</p>
                              </div>

                              <span className='d-flex align-items-center'>
                                5 <i class="ri-star-s-fill" />
                              </span>
                            </div>

                            <h6>Amazing Product</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>




            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
       
      </section>
<Newsletter/>
    </>
  )
}

export default TourDetails