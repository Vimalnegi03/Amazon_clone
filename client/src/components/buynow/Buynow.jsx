import React from 'react'
import "./buynow.css"
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'
const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className="buynow_conatiner">
        <div className="left_buy">
        <h1>Shopping Cart</h1>
        <p>Select all items</p>
        <span className='leftbuyprice'>Price</span>
        <Divider/>
        <div className="item_containert">
        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
        <div className="item_details">
            <h3>Hamara Product</h3>
            <h3>Smart Watches</h3>
            <h3 className="diffrentprice">4049.0</h3>
            <p className='unusuall'>Usually dispatched in 8 days</p>
            <p>Eligible for free shipping</p>
            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
            <Option/>
        </div>
        <h3 className='item_price'>4049.0</h3>
        </div>
        <Divider/>
        <Subtotal/>
        </div>
        <Right/>
      </div>
    </div>
  )
}

export default Buynow
