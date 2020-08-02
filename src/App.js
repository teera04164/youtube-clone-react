import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home'
import LeftMenu from './components/LeftMenu';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Trending from './containers/Trending';
import RecommendVideo from './components/RecommendVideo';
import Watch from './containers/Watch';
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LeftMenu />
            <div className="main__menu">
              <RecommendVideo />
            </div>
          </Route>
          <Route exact path="/feed/trending">
            <LeftMenu />
          </Route>
          <Route exact path="/feed/subscriptions">
            <LeftMenu />
            <h1>subscriptions </h1>
          </Route>
          <Route exact path="/watch">
            <Watch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
