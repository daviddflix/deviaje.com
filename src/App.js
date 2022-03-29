import "./App.css";
// import Landing from "./components/Landing/Landing.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
