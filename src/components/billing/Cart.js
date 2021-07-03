import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Button,
	Table,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Typography,
} from '@material-ui/core'
import _ from 'lodash'
import swal from 'sweetalert'
import {updateCart} from '../../actions/billngAction'


const Cart = (props) =>{
const { handleIncrease, handleDecrease } = props

const cart = useSelector((state)=>{
    return state.bill.cart
})

const totalAmount = () =>{
    let total = 0
    cart.forEach((ele)=> {
        return total+=ele.products.price * ele.quantity
    })
        return total
}

const handleRemove = (id) => {
    swal({
        title: 'Are you sure?',
        text: 'Remove this Item from Cart?',
        icon: 'warning',
        buttons: [true, 'Yes'],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            dispatch(updateCart(id))
            swal('Item Removed Successfully!', '', {
                icon: 'success',
            })
        }
    })
}


const dispatch = useDispatch()

    return (
        <div>
            <div>
                <Typography variant='h4'>
                    Cart- {cart.length} | Total - {totalAmount()}
                </Typography>
                <Typography variant="h6"></Typography>
                { cart.length > 0 ? (
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell allign='center'>
                                        <Typography>Sl.No</Typography>
                                    </TableCell>
                                    <TableCell allign='center'>
                                        <Typography>Product</Typography>
                                    </TableCell>
                                    <TableCell allign='center'>
                                        <Typography>Price</Typography>
                                    </TableCell>
                                    <TableCell allign='center'>
                                        <Typography>Quantity</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    cart.map((ele,i)=>{
                                        return (
                                            <TableRow key={ele.products._id}>
                                                <TableCell allign="center">
                                                    <Typography variant="h6">{i+1}</Typography>
                                                </TableCell>
                                                <TableCell allign="center">
                                                    <Typography variant="h6">{ele.products.name}</Typography>
                                                </TableCell>
                                                <TableCell allign="center">
                                                    <Typography variant="h6">{ele.products.price * ele.quantity}</Typography>
                                                </TableCell>
                                                <TableCell align='center'>
												<Button
													onClick={() => {
														handleDecrease(ele.products._id)
													}}>
													-
												</Button>
												{ele.quantity}
												<Button
													onClick={() => {
														handleIncrease(ele.products._id)
													}}>
													+
												</Button>
											</TableCell>

											<TableCell align='center'>
												<Button
													variant='contained'
													color='primary'
													onClick={() => {
														handleRemove(ele.products._id)
													}}>
													<Typography variant='h6'>Remove</Typography>
												</Button>
											</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>

                        </Table>

                        </div>
                ):(
                    <div>
                        <Typography>No items added</Typography>
                        </div>
                )

                }
            </div>
        </div>
    )
}

export default Cart