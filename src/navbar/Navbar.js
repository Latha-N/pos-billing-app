import React from 'react'
import { Link,Route,withRouter} from 'react-router-dom'
//import { useDispatch } from 'react-redux'

import Register from '../components/usersAuth.js/Register'
import Login from '../components/usersAuth.js/Login'
import Profile from '../components/usersAuth.js/Profile'
import Home from '../components/usersAuth.js/Home'

import Products from '../components/products/ProductsContainer'
import DashboardContainer from '../components/dashbord/DashBoardContainer'
import CustomersContainer from '../components/customers/CustomersContainer'
import BillingContainer from '../components/billing/BillingContainer'

import swal from 'sweetalert'
//import {logoutUser} from '../actions/userAuthAction'

const Navbar = (props) => {
    const {usersLoggedIn, handleAuth} = props

    //const dispatch= useDispatch()

    const handleLogout = () => {
      swal({
        title: 'Do you want to logout?',
        icon: 'warning',
        buttons: [true, 'Yes'],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          localStorage.removeItem('token')
          //dispatch(logoutUser())
          handleAuth()
          props.history.push('/home')
          swal('Logged out Successfully!', '', {
            icon: 'success',
          })
        }
      })
    }
  

    

  return (
    <div>
        <ul>
            {
                usersLoggedIn ? (
                    <div>
                        <Link to="/dashboard">Dashboard</Link>|| 
                        <Link to="/products">Products</Link>||
                        <Link to="/customers">Customers</Link>||
                        <Link to="/billing">Billing</Link>||
                        <Link to="/account">Profile</Link>||
                        <Link to="/logout" onClick={handleLogout}>Logout</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/home">Home</Link>
                         <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>

                    </div>
                )
            }
        </ul>
     

      <Route path="/register" component={Register}/>
      <Route path="/login" render={(props)=>{
          return <Login 
            {...props}
            handleAuth={handleAuth}
          />
      }}/>
      <Route path="/account" component={Profile}/>
      <Route path="/home" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/dashboard" component={DashboardContainer}/>
      <Route path="/customers" component={CustomersContainer}/>
      <Route path="/billing" component={BillingContainer}/>
    </div>
  )
}

export default withRouter(Navbar)
