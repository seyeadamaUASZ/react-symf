import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './Navbar';
import Home from './Home';
import Movies from './Movies';

class App extends Component {

  render(){
    return (
      <Router>
         <div>
            <Navbar />
            <Container text style={{ marginTop: '7em' }}>
                <Route path="/" exact component={Home} />
                <Route path="/movies" exact component={Movies} />
            </Container>
            </div>
      </Router>
    );
  }
 
}

export default App;
