import { Box, Button, Container, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import {Component} from "react";

class Footer extends Component {
  signOut =()=>{
    localStorage.removeItem('token', {path: "/"})
    window.location.href='./';
  }
  render() {
    
  
  return (
      <Box
        px={{ xs: 3, sm: 12 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="#3f51b5"
        color="white"
      >
        <Container>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}>Aide</Box>
                <Box>
                  <Link className="footer-list" to={"/Login"} color="inherit">
                    Login
                  </Link>
                </Box>
                <Box>
                  <Link className="footer-list" to={"/"} color="inherit">
                    Contactez-nous
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Compte</Box>
                <Box>
                  <Button
                    className="footer-list"
                    onClick={() => this.signOut()}
                    color="inherit"
                  >
                    Déconnexion
                  </Button>
                </Box>
                <Box>
                  <Link
                    className="footer-list"
                    to={"/Comments"}
                    color="inherit"
                  >
                    Commentaires
                  </Link>
                </Box>
                <Box>
                  <Link className="footer-list" to={"/Signup"} color="inherit">
                    Signup
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </Box>
  );
};
}
export default Footer;
