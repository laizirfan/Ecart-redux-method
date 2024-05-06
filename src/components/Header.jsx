import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const cartlistArray = useSelector((state)=>state.cartReducer)

   

  return (
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand > <FontAwesomeIcon icon={faCartShopping} spin className='me-3 ' />
      <b>E-kart</b></Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

          
          <Nav.Link >
          <Link to={'/Wishlist'}>
            <button className='btn btn-outline-dark rounded'> 
          <FontAwesomeIcon icon={faHeart} style={{color: "#ec0909",}} className='me-2' />
          Wish-list <Badge bg="secondary" className='rounded ms-2'>{wishlistArray.length}</Badge></button>
          </Link>
          </Nav.Link>
         


            <Nav.Link >
            <Link to={'/Cart'}>
              <button className='btn btn-outline-dark rounded'>
              <FontAwesomeIcon icon={faCartShopping} style={{color: "#63E6BE",}}  className='me-2'/>
              Cart <Badge bg="secondary" className='rounded ms-2'>{cartlistArray.length}</Badge></button>
              </Link>
              </Nav.Link>
      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header