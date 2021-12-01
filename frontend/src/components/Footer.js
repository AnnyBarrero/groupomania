import { Box, Button, Container, Grid, Toolbar } from "@material-ui/core";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Component} from "react";
import Login from "./Auth/Login";

class Footer extends Component {
  //const [name, setName] = useState();
  signOut =()=>{
    localStorage.removeItem('token', {path: "/"})
    window.location.href='./';
  };
  render(useState) {
    
    
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
                 
                  {this.signOut ? "" : <Button
                    className="footer-list"
                    onClick={() => this.signOut()}
                    color="inherit"
                  >
                    Déconnexion
                  </Button>  }
                  {Login ? <Button
                    className="footer-list"
                    onClick={() => this.signOut()}
                    color="inherit"
                  >
                    Déconnexion
                  </Button>  : <Link className="footer-list" to={"/Login"} color="inherit">
                    Login
                  </Link>}
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
                
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </Box>
  );
};
}
export default Footer;
