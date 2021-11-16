import { Grid, Paper, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const styles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const NotFound = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "30px auto",
    textAlign: "center",
  };
  const classes = styles();

  return (
    <Grid>
      <div className={classes.toolbar}> </div>
      <div className="not-found">
        <Paper elevation={20} style={paperStyle}>
          <h1>404 - Not Found!</h1>
          <Link to="/">Go Home</Link>
        </Paper>
      </div>
    </Grid>
  );
};

export default NotFound;
