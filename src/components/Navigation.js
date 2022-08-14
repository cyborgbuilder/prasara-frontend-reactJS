import React, { useState, useEffect } from 'react'
import './Nav.css'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {

  const [show, handleShow] = useState(false);

const trasnitionNavBar = () => {
    if (window.scrollY > 100){
        handleShow(true);
    }else {
        handleShow(false);
    }
}


useEffect(() => {
    window.addEventListener("scroll", trasnitionNavBar);
    return () => window.removeEventListener("scroll", trasnitionNavBar)
}, [])
  return (
    <Container>
      <Navbar  className={`nav ${show && "nav_black"}` }  bg="myTra" variant='dark'  expand='lg' sticky='top'>

<Navbar.Toggle style={{marginLeft: '20px'}} />
<Navbar.Collapse>
<Nav >
<Nav.Link  style={{ fontSize: '22px', margin: '0 10px'}} href=""><Link style={{textDecoration: 'none'}} to='/'>Home</Link></Nav.Link>
    <Nav.Link  style={{ fontSize: '22px', margin: '0 10px'}} href=""><Link style={{textDecoration: 'none'}}  to='/news'>News</Link></Nav.Link>
    <Nav.Link style={{ fontSize: '22px', margin: '0 10px'}} href=""><Link style={{textDecoration: 'none'}}  to='/careers'>Careers</Link></Nav.Link>
    <Nav.Link style={{ fontSize: '22px', margin: '0 10px'}} href=""><Link style={{textDecoration: 'none'}}  to='/brands'>Customers and Brands</Link></Nav.Link>
    <Nav.Link style={{ fontSize: '22px', margin: '0 10px'}} href=""><Link style={{textDecoration: 'none'}}  to='/standards'>Standards and Certificate</Link></Nav.Link>
    
</Nav>
</Navbar.Collapse >

<img src='/images/logo.png' />

</Navbar>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  justify-content: space-between;

  img{
    width: 4%;
    margin: 0 10px;
  }

`

export default Navigation


