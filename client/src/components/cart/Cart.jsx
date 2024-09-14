import { Divider } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <div className='cart_section'>
      <div className="cart_container">
        <div className="left_cart">
         <img src="" alt="" />
         <div className="cart_btn">
            <button className='cart_btn1'>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>
         </div>
        </div>
        <div className="right_cart">
        <h3>Fitness Gear</h3>
        <h4>Piegon Favorite Electric Kettle</h4>
        <Divider/>
        <p className="mrp">M.R.P. :Rs1195</p>
        <p>Deal of the day :<span style={{color:"#B12704"}}>Rs625.0</span></p>
        <p>You save :<span style={{color:"#B12704"}}>Rs570(47%)</span></p>
        <div className="discount_box">
            <h5>Discount :<span style={{color:"#111"}}></span>Extra 10% off</h5>
            <h4>Free Delivery <span style={{color:"#111",fontWeight:600}}>Oct 8-21</span>Details</h4>
            <p>Fastest Delivery :<span style={{color:"#111",fontWeight:600}}>Tommorow 11AM</span></p>
        </div>
        <p className='description'>About the item :<span style={{color:"#56595959",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}></span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart
