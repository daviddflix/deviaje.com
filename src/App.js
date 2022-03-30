import './App.css';
import Landing from './components/Landing/Landing.jsx'
import {Router, Route} from 'react-router-dom'
<<<<<<< HEAD
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
=======
=======
import "./App.css";
<<<<<<< HEAD
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
=======
>>>>>>> ece08d7a882d4451c39e68cef8ac6f7f2b77bd7a
>>>>>>> bd38c0a101204509df2e858bb9e76002aea0d976



function App({ children }) {
>>>>>>> 042b9696ff9d5397a5e51f6b502f6dda96af117e
  return (
<<<<<<< HEAD
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Landing />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>
          
        </Switch>
      </BrowserRouter>
=======
    <div className="App">
<<<<<<< HEAD
      <h1> Vuelos por el mundo </h1>
      {
        isAuthenticated ?  <LogoutButton />
        : <button onClick={ loginWithRedirect }> login </button>
      }
      <Profile />  
=======
<<<<<<< HEAD
    
  
=======
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> ece08d7a882d4451c39e68cef8ac6f7f2b77bd7a
>>>>>>> bd38c0a101204509df2e858bb9e76002aea0d976
>>>>>>> 042b9696ff9d5397a5e51f6b502f6dda96af117e
    </div>
  );
}

export default App;
