import './App.css';
import Landing from './components/Landing/Landing.jsx'
import {Router, Route} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () =>{
  const { user, isAuthenticated } = useAuth0()
  return(
    <>
    {
      isAuthenticated &&
      <div>
        <img src= { user.picture } alt='German' />
        <h2> { user.name } </h2>
        <h2> { user.email } </h2>
    </div> 
    }
    </>
  );
}

const LogoutButton = () =>{
  const { logout } = useAuth0()
  return(
    <button onClick = { logout } >logout</button>
  )
}

function App() {

  const { loginWithRedirect, isAuthenticated } = useAuth0()
  // console.log(user.email)
  // console.log(user.name)
  return (
    <div className="App">
      <h1> Vuelos por el mundo </h1>
      {
        isAuthenticated ?  <LogoutButton />
        : <button onClick={ loginWithRedirect }> login </button>
      }
      <Profile />  
    </div>
  );
}

export default App;
