import React, {useState, useEffect} from 'react'
import NavBar from '../src/navbar/Navbar'

const App = () => {
  const [usersLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
		if (localStorage.getItem('token')) {
			handleAuth()
		}
	}, [])


  const handleAuth = () =>{
    setUserLoggedIn(!usersLoggedIn)
  }

return (
<div>
  <h1>POS billing app</h1>
  <NavBar usersLoggedIn={usersLoggedIn} handleAuth={handleAuth}/>
</div>

  )
}

export default App
