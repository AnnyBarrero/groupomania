import { Avatar, makeStyles, Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import React, { SyntheticEvent, useState } from 'react'
import {Redirect} from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import NavBar from './NavBar';


const styles = makeStyles(theme => ({
    
    toolbar: theme.mixins.toolbar,
    
}))

const Signup = () => {
//STYLES
const paperStyle={padding:'30px 20px',width:300, margin:"20px auto"}
    const headerStyle={margin:0}   
    const btnstyle={margin:'8px 0'}
   // const checkstyle={margin:'5px 0'}
    const classes = styles()

    ///
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) =>  {
        e.preventDefault();

        await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               
                email,
                bio,
                username,
                password
            })
        });
        setRedirect(true);
    }  
    //Aca le digo para ir directo a la pagina login, sin la funcion if, no me deja ir a otra pag
    if (redirect) {
       return <Redirect to="/login"/>;
    }


    return (
        
        <Grid>
            <div className={classes.toolbar}></div>
            <Paper elevation={20} style={paperStyle}>
               <Grid>
                   <Avatar src="/icon.png"/>
                   <h2 style={headerStyle}>
                    Sign Up
                    </h2>
                    <Typography variant='caption'> 
                    Veuillez compléter les informations
                    </Typography>
               </Grid>
               <form onSubmit={submit}>
                   
                    
                    
                    
                    <TextField fullWidth label='UserName' placeholder="Votre nom d'utilisateur" required
                    onChange={e => setUserName(e.target.value)}
                    />

                    <TextField fullWidth label='Bio' placeholder="Votre Bio"required
                    onChange={e => setBio(e.target.value)}
                    />
                    
                    <TextField fullWidth label='Email' placeholder="Votre mail" required
                    onChange={e => setEmail(e.target.value)}
                    />
                    
                    <TextField fullWidth type='password' label='Password' placeholder="Votre mot de passe" required
                    onChange={e => setPassword(e.target.value)}
                    /> 
                    
                    <Button type='submit'  color='primary' style={btnstyle} >Sign up</Button>
               
                </form>
                
            </Paper>
        </Grid>
    )
}
export default Signup;