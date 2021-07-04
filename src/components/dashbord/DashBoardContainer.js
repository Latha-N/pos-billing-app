// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { startGetProducts} from '../../actions/productAction'
// import { startGetCustomers } from '../../actions/customersAction'
// import { makeStyles, Card, CardContent, CardHeader } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		minWidth: 275,
// 		marginBottom: '10px',
// 		width: 200,
// 	},
// 	title: {
// 		fontSize: 28,
// 	},
// }))

// const DashboardContainer = () => {
//     const classes = useStyles()


//     const dispatch=useDispatch()
//     const bill =useSelector((state)=>state.bill)

//     useEffect(()=>{
//         dispatch(startGetProducts())
//         dispatch(startGetCustomers())

//     },[])

//   return (
//     <div>
//       		<Card className={classes.root} align='center'>
// 				<CardHeader title='Total Products'></CardHeader>
// 				<CardContent className={classes.title}>{bill.products.length}</CardContent>
// 			</Card>
//             <Card className={classes.root} align='center'>
// 				<CardHeader title='Total Customers'></CardHeader>
// 				<CardContent className={classes.title}>{bill.customers.length}</CardContent>
// 			</Card>
//             <Card className={classes.root} align='center'>
// 				<CardHeader title='Total Orders'></CardHeader>
// 				<CardContent className={classes.title}>0</CardContent>
// 			</Card>
//             <Card className={classes.root} align='center'>
// 				<CardHeader title='Total Amount'></CardHeader>
// 				<CardContent className={classes.title}>0</CardContent>
// 			</Card>

//     </div>
//   )
// }

// export default DashboardContainer


import React from 'react'
import Chart from './Chart'
import Dashboard from './DashBoard'
import { Grid, Box, Typography } from '@material-ui/core'

const DashBoardContainer = () => {
	return (
		<div>
			<Typography variant='h3'>Dashboard</Typography>
			<br />

			<Box component='span'>
				<Grid container spacing={10}>
					<Grid item xs={4}>
						<Dashboard />
					</Grid>

					<Grid item xs={6}>
						<Chart />
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default DashBoardContainer
