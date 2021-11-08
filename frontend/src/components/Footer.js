import { Box, Container, Grid, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
    return( 
    <footer className="footer">
        <Box px={{ xs: 3, sm: 12 }}
            py={{xs: 5, sm: 5 }} 
            bgcolor="#3f51b5" 
            color="white">
                <Container >
                    <Toolbar>
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1}>
                        Aide
                        </Box>
                        <Box>
                            <Link  className="footer-list" to={"/Login"} color="inherit">
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
                        <Box borderBottom={1}>
                        Compte
                        </Box>
                        <Box>
                            <Link className="footer-list" to={"/Login"} color="inherit" >
                            Déconnexion
                            </Link>
                        </Box>
                        <Box>
                            <Link className="footer-list" to={"/Comments"} color="inherit" >
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
        </footer>
    )
}
export default Footer;

