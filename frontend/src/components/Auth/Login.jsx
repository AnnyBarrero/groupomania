import React, { useState } from 'react';
import {
    makeStyles, Grid, Paper, Avatar, Button, Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //handleSubmit va appeller loginUser avec l'username et password
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
         email,
          password
        });
        setToken(token);
      }

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
    
    //Handlechange for form

    return (
        <Grid>
            
            <div className={classes.toolbar}></div>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    
                    <Avatar src="/icon.png" />
                    <h2>Sign in</h2> 
               </Grid>
            <form onSubmit={handleSubmit}>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                
                    <Button type="submit" color="primary" variant="contained" style={btnstyle}>
                         Sign in
                    </Button>
                    <Typography > Vous n'avez pas de compte? 
                    
                    
                        <Link to="/Signup">S'inscrire</Link>
                     
                     
                    </Typography>
             </form>
           </Paper>
           
        </Grid>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
  