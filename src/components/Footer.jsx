import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  
  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-primary p-5'>
      
    <div className="row">
        <div className="col-md-4">
          <h5> <FontAwesomeIcon icon={faCartShopping} className='mt-2' /><b className='ms-3'>E-Kart</b></h5>
           
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique. 
          Lorem ipsum dolor sit amet. Lorem ipsum dolor error  quasi voluptatibus ratione quas optio in!</p>
        </div>
  
  
        <div className="col-md-2">
          <h5 className='mt-2'>Links </h5>
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}><p>Home</p></Link>
         <Link to={'/Cart'} style={{textDecoration:'none',color:'black'}}> <p>Cart</p></Link>
        <Link to={'/Wishlist'} style={{textDecoration:'none',color:'black'}}>  <p>Wish-list</p></Link>
        
  
        </div>
        <div className="col-md-2">
          <h5 className='mt-2'>Guides</h5>
          <p> React</p>
          <p>React_bootstrap</p>
          <p>Bootswatch</p>
          
          </div>
        <div className="col-md-4">
          <h5 className='mt-2 ms-3'>Contact us</h5>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your email id' className='form-control w-50' />
            <button className='btn btn-dark ms-3' >subscribe</button>
  
          </div>
          <div className='d-flex justify-content-between w-50 mt-3'>
            <FontAwesomeIcon icon={faTwitter} size='xl' />
            <FontAwesomeIcon icon={faInstagram} size='xl' />
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
            <FontAwesomeIcon icon={faFacebook}  size='xl'/>
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer