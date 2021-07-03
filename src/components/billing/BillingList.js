import React,{useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Button,
	Typography,
} from '@material-ui/core'
import {startGetBills} from '../../actions/billngAction'
import swal from 'sweetalert'

const useStyles = makeStyles({
	table: {
		minWidth: 550,
	},
})

const BillList = (props) =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startGetBills())
    },[])

    

    return (
        <div>

        </div>
    )
}
