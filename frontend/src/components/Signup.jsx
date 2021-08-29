import { Avatar, makeStyles, Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import NavBar from './NavBar';


const styles = makeStyles(theme => ({
    
    toolbar: theme.mixins.toolbar,
    
}))

const Signup=()=>{
const paperStyle={padding:'30px 20px',width:300, margin:"20px auto"}
 const headerStyle={margin:0}   
 const btnstyle={margin:'8px 0'}
 const checkstyle={margin:'5px 0'}
 const classes = styles()

    return (
        
        <Grid>
            <div className={classes.toolbar}></div>
            <Paper elevation={20} style={paperStyle}>
               <Grid align='center'>
                   <Avatar src="/icon.png"/>
                   <h2 style={headerStyle}>
                    Sign Up
                    </h2>
                    <Typography variant='caption'> 
                    Veuillez compléter les informations
                    </Typography>
               </Grid>
               <form>
                    <TextField fullWidth label='Nom' placeholder="Votre nom"/>
                    <TextField fullWidth label='Prenom' placeholder="Votre prenom"/>
                    <TextField fullWidth label='UserName' placeholder="Votre nom d'utilisateur"/>
                    <TextField fullWidth label='Email'placeholder="Votre mail"/>
                    <TextField fullWidth label='Password' placeholder="Votre mot de passe"/> 
                    <FormControlLabel style={checkstyle}
                    control={<Checkbox name="checkedA" />}
                    label="J'ai lu et j'accepte la politique de confidentialité"
                    />
                    <Button type='submit' variant='contained' color='primary' style={btnstyle} >Sign up</Button>
               </form>
                
            </Paper>
        </Grid>
    )
}
export default Signup;