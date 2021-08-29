import React from 'react'
import NavBar from './NavBar'
import {
    makeStyles, Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography
} from '@material-ui/core'

import { Link } from 'react-router-dom';


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

const Container = () => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    const classes = styles()
    
    
    

    return (
        <div className={classes.root}>
            <NavBar />
            
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Grid>
           <Paper elevetation={10} style={paperStyle}>
               <Grid align='center'>
                    <Avatar src="/icon.png" />
                    <h2>Sign in</h2> 
               </Grid>
               <TextField label="Username" placeholder='Enter username' fullWidth required/>

               <TextField label="Password" placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                control={
                    <Checkbox
                    name="checkedB"
                    color="primary"
                />    
                }
                label="Se souvenir de moi"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography > Vous n'avez pas de compte? 
                <Link to="/Signup">S'inscrire</Link>
                </Typography>
           </Paper> 
           </Grid>
            </div>
        </div>
        
    )
}

export default Container
