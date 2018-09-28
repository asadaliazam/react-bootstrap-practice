import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <CustomNavbar />
            <Route exact path = "/" component = {Home} />
            <Route path = "/about" component = {About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
