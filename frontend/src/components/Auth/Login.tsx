import React, { useState, SyntheticEvent } from 'react';
import {
    makeStyles, Grid, Paper, Avatar, Button, Typography
} from '@material-ui/core'
import { Redirect } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
//import axios from 'axios';


const Login = (props: { setUserName: (username: string) => void }) => {
    //STYLES
    const styles = makeStyles(theme => ({
        root: {
            display: 'flex'
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }))
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    const classes = styles()
    ///
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

 
    const submit =  async (e: SyntheticEvent) => {
        e.preventDefault();
    

        await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        //for get des cookies fron the serveur
        //credentials: 'include',
        body: JSON.stringify( {
            email,
            password
          })
        }).then(res => res.json()
        ).then(user => {
            props.setUserName(user.username)
        })

        setRedirect(true);
    }
        
       //Aca le digo para ir directo a la pagina login, sin la funcion if, no me deja ir a otra pag
    if (redirect) {
        return <Redirect to="/Userspage"/>;
    }

    return (
        <Grid>
            <div className={classes.toolbar}></div>
            <Paper elevation={20} style={paperStyle}>
                <Grid>
                    <Avatar src="/icon.png" />
                    <h2>Sign in</h2> 
               </Grid>
            <form onSubmit={submit}>
                    <label>
                        <p>Email</p>
                        <input type="email" placeholder="Email adress" required
                         onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="Mot de passe" required
                        onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                  <div>
                    <Button type="submit" color="primary" variant="contained" style={btnstyle}>
                         Sign in
                    </Button>
                  </div> 
             </form>
           </Paper>
           
        </Grid>
    )
    
}

export default Login;
  