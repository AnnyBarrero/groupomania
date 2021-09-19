import { Box, Container, Grid, Link, Toolbar } from "@material-ui/core";
import React from "react";


export default function Footer() {
    return <footer>
            <Box px={{ xs: 3, sm: 12 }}
            py={{xs: 5, sm: 5 }} 
            bgcolor="#3f51b5" 
            color="white">
                <Container maxWidth="lg">
                    <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                        <Box borderBottom={1}>
                        Aide
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                            Contactez-nous
                            </Link>
                        </Box>
                        
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                        Compte
                        </Box>
                        <Box>
                            <Link href="/Container" color="inherit">
                            Login
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/Signup" color="inherit">
                            Signup
                            </Link>
                        </Box>
                        </Grid>
                    </Grid>
                    </Toolbar>
                </Container>
            </Box>
        </footer>;    
    
}

