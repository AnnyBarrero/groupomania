import { makeStyles, Grid, Avatar, Paper, Typography } from '@material-ui/core';
import React from 'react'


const styles = makeStyles(theme => ({
    
    toolbar: theme.mixins.toolbar,
    
}))

export default function UsersPage() {

    const paperStyle={padding:'30px 20px',width:300, margin:"20px auto"}
    const headerStyle={margin:0}   
    const classes = styles()

    React.useEffect(() => {
        console.log('useEffect')
    })
    
    return (
        <Grid>
           <div className="container">
            
            <div className={classes.toolbar}></div>
            <Paper elevation={20} style={paperStyle}>
               <Grid align='center'>
                   
               <Avatar src="/icon.png"/>
                   <h1 style={headerStyle}>Bienvenue </h1>
                   
                    <Typography variant='caption'> 
                    Veuillez compléter les informations
                    
                    </Typography>
               </Grid>
               
                
            </Paper>
           </div>
        </Grid>
    )
}

