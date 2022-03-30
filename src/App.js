import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Landing />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
