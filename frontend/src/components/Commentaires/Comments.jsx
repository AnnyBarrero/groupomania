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
                <Grid key={commentaire.content} xs={12} md={6} lg={4}>
                    <Paper>
                   <h1> { commentaire.title }</h1> 
                   <h2> { commentaire.username } </h2>
                    <p>{ commentaire.content }</p> 
                    </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}