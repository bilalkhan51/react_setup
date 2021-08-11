import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}


export default App;