import { Grid, Paper, Typography, Button } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class UsersPage extends Component {
  state = {};
  componentDidMount() {
    axios.get("users/me").then(
      (res) => {
        this.setState({
          user: res.data,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    const paperStyle = {
      padding: "50px 50px",
      width: "600px",
      margin: "100px auto",
      textAlign: "center",
    };

    const headerStyle = {
      margin: 0,
    };

    if (this.state.user) {
      return (
        <Grid>
          <Container style={paperStyle}>
            <Row>
              <div className="container">
                <Paper elevation={20}>
                  <Grid>
                    <img alt="logo" width="50px" src="/icon.png" />
                    <h1 style={headerStyle}>
                      {this.state.user.username}, Bienvenue sur Groupomania
                      Network !
                    </h1>
                    <Typography variant="caption">
                      <h2>Votre espace utilisateur</h2>
                      <h3>Bio:</h3>
                      <p>{this.state.user.bio}</p>
                      <div className="comment-button">
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          className="Button-commentaires"
                        >
                          <Link to="/Comments"> Vos Commentaires</Link>
                        </Button>
                      </div>
                    </Typography>
                  </Grid>
                </Paper>
              </div>
            </Row>
          </Container>
        </Grid>
      );
    }
    return (
      <Container>
        <Row>
          <div style={paperStyle}>
            <img alt="logo" width="50px" src="/icon.png" />

            <h1 style={headerStyle}>Bienvenue sur Groupomania</h1>
            <h2>Vous êtes pas connecté </h2>
          </div>
        </Row>
      </Container>
    );
  }
}
