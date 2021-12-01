//imports
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comments from './components/Commentaires/Comments';
//Common components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
//For the login
import UsersPage from './components/Users/Userspage';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/Notfound';
// Composant App
function App() {
  return ( 
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/Login"> 
    <Login/>
    </Route>
    <Route path="/Userspage" >
    <UsersPage/>
    </Route>
    <Route path="/Dashboard">
    <Dashboard />
    </Route>
    <Route path="/Signup">
    <Signup />
    </Route>
    
    <Route path="/Comments">
    <Comments />
    </Route>

    <Route component={NotFound}/>

    </Switch>
    <Footer/>
    </BrowserRouter>        
  );
}
export default App;

