import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
    padding: 10,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 240,
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button variant="text">
            <Link to="./">
              <img
                src="/icon-left-font-monochrome-white.svg"
                height="35px"
                alt="logo"
              />
            </Link>
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
