import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'


function Cart() {

  const[total,setTotal] =useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);




  const getTotal = ()=>{
  if(cartArray.length>0){
    
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))

  }
  else{
    setTotal(0)
  }

  }
  
  useEffect(()=>{
    getTotal()
  },[cartArray])
 
  const handleCheck = ()=>{
    alert('Order Placed Successfully')
    dispatch(emptyCart())
    navigate('/')


  }
  

  

  return (
    <>
 { cartArray.length>0 ?
   <div className='row my-5'>
      <div className="col-md-1"></div>
      <div className="col-md-7 mt-5 mb-5">


       <table className='table shadow w-100' style={{overflowX:'auto'}}>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {cartArray.map((item,index)=>( <tr>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.thumbnail} width={'150px'} height={'100px'} alt="" />
              </td>
              <td> price :$ {item.price}</td>
              <td><button onClick={()=>dispatch(removeCartItem(item.id))} className='btn btn-outline-danger rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>))
           }
          </tbody>

        </table>

        
      </div>

      
      <div className="col-md-3 mt-5 ">
        <div className='shadow p-4 '>

         <h1 className='text-primary mb-3'>Cart Summary</h1>
          <h4>Total number of Products : <span className='text-warning'>{cartArray.length} </span></h4>
          <h4> Total Price :  <span className='text-warning'>$ {total}</span></h4>
          <button  onClick={handleCheck}     className='btn btn-success rounded mt-4 mb-3 w-100'>Check Out</button>
          


        </div>
      </div>
      <div className="col-md-1"></div>

    </div>

    :
     <div className='d-flex justify-content-center align-item-center  w-100 my-5'>
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
      <img src="https://media.tenor.com/images/b8cfc0a9f0bcb7d127f632e6f3990708/tenor.gif" alt="cart" />

        <h4 className='text-danger mt-4'> Empty Cart </h4>
       <Link to={'/'}>
          <button className='btn btn-success p-3  rounded mt-2'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to home</button>
  
       </Link>
      </div>
      <div className="col-md-4"></div>

      

    </div>}

    </>
  )
}

export default Cart