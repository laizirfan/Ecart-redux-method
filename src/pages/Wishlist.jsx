import React from 'react'
import { faArrowLeft, faCartPlus, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';

function Wishlist() {


  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);


  const handleAdd = (products)=>{
   
    dispatch(addCartItem(products))

    dispatch(removeWishlistItem(products.id))

  }




  const dispatch = useDispatch()

  return (
    <>
   <Row className='ms-5 me-3' style={{marginTop:'100px'}}>
    
   { wishlistArray.length > 0?
    wishlistArray.map((products)=>(<Col  className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
    <Card className='ms-3 mt-3' style={{ width: '16rem'  }}>
 <Card.Img variant="top" src={products.thumbnail} style={{height:'200px'}} />
 <Card.Body>
   <Card.Title>{products.title.slice(0,25)}</Card.Title>
   <Card.Text>
    <p>
    {products.description.slice(0,50)}
    </p>
     <h5><b>Price : $ {products.price} </b></h5>
   </Card.Text>
    <div className='d-flex align-items-center justify-content-between'>

    <Button onClick={()=>dispatch(removeWishlistItem(products.id))} variant='outline-danger'><FontAwesomeIcon icon={faTrash} /></Button>
    
      <Button onClick={()=>handleAdd(products)} variant='outline-success'> <FontAwesomeIcon icon={faCartPlus} style={{color: "#63E6BE",}} /></Button>
  
    </div>
  
 </Card.Body>
</Card>

</Col>))

   

  :

    <div className='d-flex justify-content-center align-item-center  w-100 my-5'>
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
      <img src="https://media.tenor.com/images/b8cfc0a9f0bcb7d127f632e6f3990708/tenor.gif" alt="cart" />

        <h4 className='text-danger mt-4'>Your wishlist is empty  😔</h4>
       <Link to={'/'}> <button className='btn btn-success p-3  eounded mt-2'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to home</button></Link>

      </div>
      <div className="col-md-4"></div>

      

  </div> 
}

   </Row>
 
   
   
    </>
  )
}

export default Wishlist