//imports
import React from 'react';

import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Comments from './components/Commentaires/Comments';
import Createcomment from './components/Commentaires/Createcomment'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

import UsersPage from './components/Users/Userspage';

import Dashboard from './components/Dashboard/Dashboard';
//import useToken from './useToken';

// Composant App



function App() {
  

     return ( 
      <Router>
        <NavBar/>

          <Switch>

            <Route exact path="/Home">
            <Home />
            </Route>

            <Route path="/Login">
              <Login />
            </Route>

            <Route path="/Dashboard">
            <Dashboard />
            </Route>

            <Route path="/Userspage">
              <UsersPage />
            </Route>

    

            <Route path="/Signup">
              <Signup />
            </Route>

            <Route path="/Createcomment">
              <Createcomment />
            </Route>

            <Route path="/Comments">
              <Comments />
            </Route>



          </Switch>
          <Footer/>
          </Router>
      
        
  );
}
export default App;

