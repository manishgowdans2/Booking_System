import React from 'react'
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from "../assets/images/male-tourist.png"

const Newsletter = () => {
  return (
    <section className='newsletter'>
    <Container >
        <Row>
            <Col lg='6'>
                <div className="newsletter_content">
                    <h2>Premium Contents</h2>

                    <div className="newsletter_input">

                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn newsletter_btn'>Subscribe</button>
                    </div>

                    <p>Sample text</p>
                </div>
            </Col>

            <Col lg='6'>
                <div className="newsletter_img">
                    <img src={maleTourist}/>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Newsletter