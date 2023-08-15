import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import Subtitle from "../shared/Subtitle"
import worldImg from "../assets/images/world.png"
import experienceImg from "../assets/images/experience.png"

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/FeaturedTourList'
import MasnoryImagesGallery from '../components/MasnoryImagesGallery'
import Testimonial from '../components/Testimonial'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
      <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know before you go"}/>
                  <img src={worldImg}/>
                </div>
                <h1>
                  Travelling gives you <span className="heighlight">memories</span>
                </h1>
                <p>Sample para</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg}/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={herovideo} controls/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02}/>
              </div>
            </Col>

           <SearchBar/>

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>


      {/* Featured section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle Subtitle={"Explore"}/>
              <h2 className="featured_tour-title">Our Featured Parts</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>


      {/* Experience Section */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="experience_content">
                {/* <Subtitle Subtitle={'Experience'}/>

                <h2>With all our experience <br>we will serve you</br></h2>
                <p>Example para</p> */}

              <Subtitle Subtitle={"Experience"}/>
              <h2 className="featured_tour-title">With all our experience we will serve you</h2>
              <p>Example para</p> 
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12K+</span>
                  <h6>Successful Trip</h6>
                </div>

                <div className="counter_box">
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter_box">
                  <span>5</span>
                  <h6>Years</h6>
                </div>

              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      {/* <section>
        <Row>
          <Col lg='12'>
            <Subtitle Subtitle={"Gallery"}/>
            <h2 className="gallery_title">
              Visit our gallery
            </h2>
          </Col>

          <Col lg="12">
          <MasnoryImagesGallery/>
          </Col>
        </Row>
      </section> */}

<section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle Subtitle={"Gallery"}/>
              <h2 className="featured_tour-title">Visit our gallery</h2>
            </Col>
            <MasnoryImagesGallery/>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Fans Love"}/>
              <h2 className="testimonial_title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>
      </>
  )
}

export default Home