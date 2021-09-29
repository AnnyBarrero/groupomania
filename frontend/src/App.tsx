//imports
import React, {useEffect, useState} from 'react';

import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comments from './components/Commentaires/Comments';
import Createcomment from './components/Commentaires/Createcomment'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

//For the login
import UsersPage from './components/Users/Userspage';
import Dashboard from './components/Dashboard/Dashboard';

//import useToken from './components/useToken';

// Composant App



function App() {
    const [username, setUserName] = useState('');

    useEffect(() => {
        (
            async () => {
            const response = await fetch('http://localhost:8080/api/users/me', {
                headers: {'Content-Type': 'application/json'},
                //for get des cookies fron the serveur
               // credentials: 'include',
            });

            const content = await response.json();
            
            setUserName(content.username);
            }
        )();
    });
  
     return ( 
     // <Router>
     <BrowserRouter>
        <NavBar/>

          <Switch>

            <Route exact path="/Home">
            <Home />
            </Route>

            <Route path="/Login" component={() => <Login setUserName={setUserName}/>}/>
  
              
            <Route path="/Dashboard">
            <Dashboard />
            </Route>

            <Route path="/Userspage" component={() => <UsersPage username={username}/>}/>
             
            

    

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
        </BrowserRouter>  
       //</Router>
      
        
  );
}
export default App;

