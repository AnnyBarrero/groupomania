import React, { useEffect, useState } from "react"
import { Paper, Container, Grid } from "@material-ui/core"

export default function Commentaires() {
    const paperStyle={padding:'30px 20px',width:300, margin:"30px auto"}
        

    const [commentaires, setCommentaires] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/messages')
            .then(res => res.json())
            .then(data => setCommentaires(data))
    }, [])
    return (
        <Container>
            <Grid style={paperStyle}>
                
            </Grid>

            <Grid container>
            {commentaires.map(commentaire => (
                <Grid  xs={12} md={6} lg={4}>
                    <Paper>
                   <h1> </h1> 
                   <h2>  </h2>
                    <p></p> 
                    </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}