import { Grid, Paper, makeStyles} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


const styles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}))
const Home = () => {
    const headerStyle={margin:0}
    const paperStyle={padding:'30px 20px',width:300, margin:"30px auto",textAlign:"center"}
    const classes = styles()
    
    return (
       <Grid>
            <div className={classes.toolbar}></div>
                <div className=''>
                <Paper elevation={20} style={paperStyle}>
                <Grid >
                    <img alt="logo" width="50px" src="/icon.png"/>
                    <h1 style={headerStyle}>Bienvenue sur le Groupomania Social Network !</h1>
                    </Grid>
                    <p><Link to="/Login">Connectez-vous</Link> au réseau social de Groupomania pour échanger avec vos collégues sans plus tarder ! <br />
                    <br />
                    Si vous n'avez pas encore de compte, <Link to="/Signup">inscrivez-vous ici</Link> !</p>
                </Paper>
            </div>
        </Grid>
            
    );
}

export default Home;