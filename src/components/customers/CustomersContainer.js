import React,{useState} from 'react'
import { Typography } from '@material-ui/core'

import { useDispatch,useSelector } from 'react-redux'
import AddCustomers from './AddCustomers'
import CustomerList from './CustomersList'
import EditCustomers from './EditCustomer'
import { startGetCustomerData } from '../../actions/customersAction'

const CustomersContainer = () => {
    const [toggle, setToggle] = useState(false)
    const dispatch=useDispatch()

    const handleToggle = (value) =>{
        setToggle(value)
    }

    const handleEdit = (id) =>{
        handleToggle(true)
        dispatch(startGetCustomerData(id))
    }

    const customerData = useSelector((state)=>state.bill.customerData)
    //console.log('llll',customerData)
  return (
    <div>
        {
            toggle  ? (
                <div>
                    <Typography variant="h3"> Edit Customer</Typography>
                    <EditCustomers 
                        toggle={toggle}
                        handleToggle={handleToggle}
                        {...customerData}
                    />
                </div>
            ) : (
                <div>
                    <Typography variant="h3">Add Customers</Typography>
                    <AddCustomers toggle={toggle}/>
                </div>
            )
        }
        <hr/>
        <CustomerList handleEdit={handleEdit}/>
    </div>
  )
}



export default CustomersContainer
