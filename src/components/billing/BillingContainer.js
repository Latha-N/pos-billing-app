import React,{useEffect, useState} from 'react'
import BillData from './BillData'
import AddToCart from '../billing/AddToCart'
import GenerateBill from '../billing/GenerateBills'
 import BillList from '../billing/BillingList'
 import Invoice from '../../components/billing/Invoice'
 import { useSelector, useDispatch } from 'react-redux'
    
 import { makeStyles, Modal, Typography } from '@material-ui/core'
import { startGetBills,getbillCustData,startGetBillData } from '../../actions/billngAction'
import {startGetUserInfo} from '../../actions/userAuthAction'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	button: {
		marginLeft: theme.spacing(5),
		marginRight: theme.spacing(5),
		marginTop: theme.spacing(2),
	},
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}))


 const BillingContainer = (props) => {
	const dispatch = useDispatch()
    const classes = useStyles()
    const bills = useSelector((state) => state.bill.bills)

    const customer = useSelector((state) => state.bill.addBillData)
    const billData = useSelector((state) => state.bill.billData)
    const [toggleInvoice, setToggle] = useState(false)

    useEffect(()=>{
        dispatch(startGetBills())
        dispatch(getbillCustData(customer))
        dispatch(startGetUserInfo())
    },[])

    const handleToggle = (value) =>{
        setToggle(value)
    }

    const handleInvoice = (id) =>{
        handleToggle(true)
        dispatch(startGetBillData(id))
    }

  return (
    <div>
    <Typography variant='h3'>Billing</Typography>
    <br />
    <BillData />
    <br />
    <AddToCart />
    <hr />
    {Object.keys(customer).length > 0 ? (
        <div>
            {!Object.values(customer).includes('') && (
                <Typography variant='h4'>
                    Customer -{' '}
                    {customer.customer.name[0].toUpperCase() +
                        customer.customer.name.slice(1)}
                </Typography>
            )}
        </div>
    ) : (
        <Typography>No Customers Added</Typography>
    )}

    <div>
        <GenerateBill />
    </div>

    <hr />
    <br />
    <Typography variant='h4'>Listing Bills - {bills.length}</Typography>
    <BillList handleInvoice={handleInvoice}/>
     {toggleInvoice && Object.keys(billData).length > 0 && (
        <Modal
            open={toggleInvoice}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
                <Invoice handleToggle={handleToggle}/>
        </Modal> 
     )}
</div>
)
}


export default BillingContainer


