import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Home from './components/Home'
import DataListProfile from './components/DataListProfile'
// import SearchResult from './components/SearchResult'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={DataListProfile} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
