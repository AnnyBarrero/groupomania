import { Grid, Paper } from "@material-ui/core";
import React from "react";

const Login=()=>{
    
    const paperStyle={padding :20,height:'70vh',width:280}
    return(
        <Grid>
           <Paper elevetation={10} style={paperStyle}>
            Sign in
           </Paper> 
        </Grid>
    )
}

export default Login