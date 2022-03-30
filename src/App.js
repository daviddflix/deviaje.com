import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";



function App({ children }) {
  return (
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
    </div>
  );
}

export default App;
