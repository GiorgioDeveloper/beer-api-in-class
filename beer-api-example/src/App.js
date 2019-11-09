import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import Home from "./pages/Home/";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-beers" component={AllBeers} />
        <Route
          exact
          path="/(beer-detail/:id|random-beer)"
          component={SingleBeer}
        />
      </Switch>
    </div>
  );
}

export default App;
