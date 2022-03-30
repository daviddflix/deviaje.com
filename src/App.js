<<<<<<< HEAD
import './App.css';
import Landing from './components/Landing/Landing.jsx'
import {Router, Route} from 'react-router-dom'
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
    </div>
  );
}

export default App;
