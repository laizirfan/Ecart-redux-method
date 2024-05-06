import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import {addWishlistItem} from '../redux/slices/wishlistSlice'
import { addCartItem } from '../redux/slices/cartSlice';

function Home() {

  const dispatch = useDispatch()

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);




  return (
    <div >
     
     <Row className='ms-5 me-3' style={{marginTop:'100px'}}>
      
    {data?.length>0?
      data?.map((products)=>(
       <Col className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
      <Card className='ms-3 mt-3' style={{ width: '16rem'  }}>
      <Card.Img variant="top" src={products.thumbnail} height={'200px'}/>
      <Card.Body>
        <Card.Title>{products.title.slice(0,25)}</Card.Title>
        <Card.Text>
         <p>
           {products.description.slice(0,50)}
         </p>
          <h5><b>Price : $ {products.price}</b></h5>
        </Card.Text>
         <div className='d-flex align-items-center justify-content-between'>

         <Button onClick={()=>dispatch(addWishlistItem(products))}
           variant='outline-danger'><FontAwesomeIcon icon={faHeart} style={{color: "#ec0909", }}   /></Button>
         
           <Button onClick={()=>dispatch(addCartItem(products))} variant='outline-success'> <FontAwesomeIcon icon={faCartPlus} style={{color: "#63E6BE",}} /></Button>
       
         </div>
       
      </Card.Body>
    </Card>
      </Col>))

       
        
        :
      
  
        <p>Loading.....</p>
     
}
     </Row>
   


    </div>
  )
}

export default Home