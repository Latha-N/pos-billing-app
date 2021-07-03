import React from 'react'
import BillData from './BillData'
import AddToCart from '../billing/AddToCart'
import GenerateBill from '../billing/GenerateBills'

const BillingContainer = (props) => {
  return (
    <div>
      <h1>Billing</h1>
      <BillData/> <br/>
      <AddToCart/><br/>
      <GenerateBill/>

    </div>
  )
}

export default BillingContainer
