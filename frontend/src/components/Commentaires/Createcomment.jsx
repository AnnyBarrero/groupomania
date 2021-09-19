import { Button, Container, TextField, Typography } from "@material-ui/core"
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
 field: {
     marginTop: 20,
     marginBottom: 20,
     displau: 'block'
 }
})

export default function Create() {
    const classes = useStyles()
    const [titre, setTitre] = useState('')
    const [commentaire, setCommentaire] = useState('')
    const [titreErreur, setTitreErreur] = useState(false)
    const [commentaireErreur, setCommentaireErreur] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitreErreur(false)
        setCommentaireErreur(false)

        if (titre === '') {
            setTitreErreur(true)
        }
        if (commentaire === '') {
            setCommentaireErreur(true)
        }
        if (titre && commentaire) {
            console.log(titre, commentaire)
        }
    }

    return (
        <Container>
            <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Créer un nouveau commentaire
            </Typography>
            
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                onChange={(e) => setTitre(e.target.value)}
                className={classes.field}
                label="Titre"
                variant="outlined"
                color="primary"
                fullWidth
                required
                error={titreErreur}
                />
                <TextField
                onChange={(e) => setCommentaire(e.target.value)}
                className={classes.field}
                label="Commentaire"
                variant="outlined"
                color="primary"
                multiline
                rows={4}
                fullWidth
                required
                error={commentaireErreur}
                />   
            
                <Button
                onClick={() => console.log('you clicked me')}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                >
                Submit
            </Button> 
            </form>
            
        </Container>
    )
}
