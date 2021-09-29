import { Grid, Paper } from '@material-ui/core';
import React from 'react';

export default function Dashboard() {
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
 // const toolbar = theme.mixins.toolbar,
  return(
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <h2>Dashboard</h2>
        </Grid>

      </Paper>
    
    

     
  );
}
 