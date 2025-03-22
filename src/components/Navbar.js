import React, { useState } from 'react'
import logo from '../Images/th.jpg';
import About from './About'
import QuickEnquiry from './QuickEnquiry';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Route, Routes, withRouter, Switch, Redirect, Link, NavLink } from 'react-router-dom'
import solar from '../Images/solar.jpg'

export default function Navbar(props) {
  // const handleClick = () => {
  //   console.log("handlclick")

  // }
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
     <meta charset="UTF-8" />

<link rel="stylesheet" href="style.css" />

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <div className='logo'>
              <img src={logo} width="150" height="90" class="d-inline-block align-top" alt="" />
            </div>


          </a>
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>



              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              {/* <a className="nav-link" >About</a> */}



              {/* <Link to="/about" exact component={About} > About </Link>  */}

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/quickEnquiry">Quick Enquiry</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact Us
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/contact">Contact Details</a></li>
                  <li><a className="dropdown-item" href="/">Another action
                    <div >

                    </div>
                  </a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>

              </li>


            </ul>
            <div className="content">
                         <div className='row'>
                      
                            <div className='col'>
                           <a onClick={() => openInNewTab('https://www.google.com/maps/place/Nerli+Tamgon+Rd,+Ujalaiwadi,+Kolhapur,+Maharashtra+416004/@16.6636052,74.2692024,20.3z/data=!4m6!3m5!1s0x3bc0fe3394d15831:0x1bd8cf90ff45bb4!8m2!3d16.6633075!4d74.2691933!16s%2Fg%2F12lv7hx8g')}>
                            <div className="address details">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="topic">Address</div>
                                <div className="text-one">Nerli Tamgaon Road, Ujlaiwadi</div>
                                <div className="text-two">Kolhapur-416005</div>
                            </div>
                            </a>
                            </div>
                            <div className='col'>
                            <div className="phone details">
                                <i className="fas fa-phone-alt"></i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+918421216993</div>
                                <div className="text-two">+0096 3434 5678</div>
                            </div>
                            </div>
                            <div className='col'>
                            <div className="email details">
                                <i className="fas fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">nagesh.ningarani@gmail.com</div>
                                <div className="text-two">info.codinglab@gmail.com</div>
                            </div>
                            </div>
                        
                       </div>
                    </div>
       
          </div>
        </div>

      </nav>
      <BrowserRouter>
        {/* <a className="nav-link" to="/about" >About</a> */}
        {/* <NavLink to="/about" style={({ isActive }) => ({
          color: isActive ? 'black' : 'black'
        })}>
        </NavLink> */}
        <Routes>
          <Route exact path="/about" element={<About />} />

        </Routes>


        <Routes>
          <Route exact path="/quickEnquiry" element={<QuickEnquiry />} />
        </Routes>

        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div>
      </div>
    </>

  )
}

