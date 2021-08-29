//imports
import React from 'react'

//import React, { Component } from 'react';

import Container from './components/Container'
//import {ThemeProvider} from '@material-ui/core/styles'
//import theme from './tConfig'
import Signup from './components/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Createcomment from './components/Createcomment'
//import Comments from './components/Comments'
import NavBar from './components/NavBar';
import Home from './components/Home'
import Footer from './components/Footer';

// Composant App
function App() {
     return ( 
       <Router>
        <NavBar/>

          <Switch>
            <Route exact path="/Home">
            <Home />
            </Route>

            <Route path="/Container">
              <Container />
            </Route>

            <Route path="/Signup">
              <Signup />
            </Route>

            <Route path="/Createcomment">
              <Createcomment />
            </Route>
          </Switch>
          <Footer/>
        </Router> 
      
          

        
  );
}

export default App;
