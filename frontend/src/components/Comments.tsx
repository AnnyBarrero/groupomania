import React, { useEffect, useState } from "react"
import { Paper, Container, Grid } from "@material-ui/core"

export default function Commentaires() {
    const [commentaires, setCommentaires] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/messages')
            .then(res => res.json())
            .then(data => setCommentaires(data))
    }, [])
    return (
        <h1>
            COMMENTAIRES
        </h1>
    )
}