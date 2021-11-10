import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import Favourite from "./components/Favourite";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favourites" exact component={Favourite} />
            {/* <Route path="/movie/:imdbID" component={MovieDetail} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
