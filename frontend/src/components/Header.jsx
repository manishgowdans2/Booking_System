import React from 'react'
import {Container, Row, Button} from "reactstrap"
import {NavLink, Link} from 'react-router-dom'
import logo from "../assets/images/logo.png"
import './header.css'

const nav_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  
  {
    path:'/tours',
    display:'Tours'
  },
  

]

const Header = () => {
  return (
   <header className="sticky__header">
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">

          <div className="logo">
          Booking System
          </div>

          {/* Menu */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">

              {
                nav_links.map((item,index)=>
                (<li className="nav_item" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link":""}>
                      {item.display}
                    </NavLink>
                  </li>
                ))
              }

            </ul>
          </div>
          {/* Menu ends */}

          <div className="nav_right d-flex align-items-center gap-4">
            <div className="nav_btns d-flex align-items-center gap-4">

             <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>

             <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>

            </div>
           
           <span className="mobile_menu">
            <i className="ri-menu-line"></i>
           </span>




          </div>

        </div>
      </Row>
    </Container>
   </header>
  )
}

export default Header