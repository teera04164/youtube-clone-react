import React from 'react';
import './App.css';
import Home from './containers/Home/Home'
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Trending from './containers/Trending/Trending';
import Watch from './containers/Watch/Watch';
import Search from './containers/Search/Search';
import Subscriptions from './containers/Subscriptions/Subscriptions';
import { StateProvider } from './hooks/store'
function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/feed/trending" component={Trending} />
            <Route  path="/feed/subscriptions" component={Subscriptions} />
            <Route  path="/watch" component={Watch} />
            <Route  path="/results" component={Search} />
          </Switch>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
