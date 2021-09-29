import { makeStyles, Grid, Avatar, Paper, Typography } from '@material-ui/core';
import React from 'react';


const styles = makeStyles(theme => ({
    
    toolbar: theme.mixins.toolbar,
    
}))

const UsersPage = (props: { username: string }) => {

    ///STYLES
    const paperStyle={padding:'30px 20px',width:300, margin:"20px auto"}
    const headerStyle={margin:0}   
    const classes = styles()

        ///////////
    

    
    return (
        <Grid>
           <div className="container">
            
            <div className={classes.toolbar}></div>
            <Paper elevation={20} style={paperStyle}>
               <Grid>
                   
               <Avatar src="/icon.png"/>
                   <h1 style={headerStyle}>
                       {props.username ? 'Bonjour' + props.username: 'Vous etes connecter'} </h1>
                   
                    <Typography variant='caption'> 
                    Votre espace utilisateur
                    
                    </Typography>
               </Grid>
               
                
            </Paper>
           </div>
        </Grid>
    )
}

export default UsersPage;