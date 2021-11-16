import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      bio: this.bio,
      email: this.email,
      username: this.UserName,
      password: this.password,
      content: this.content,
      title: this.title,
    };

    axios
      .post("users/register", data)
      .then((res) => {
        console.log(res);
        window.location.href = "./Userspage";
      })
      .catch((err) => {
        console.log(err);
        alert("veuillez remplir les données correctement");
      });
  };

  render() {
    const paperStyle = {
      padding: "30px 30px",
      width: "500px",
      margin: "100px auto",
      textAlign: "center",
    };
    const btnstyle = {
      margin: "8px 0",
    };
    const textStyle = {
      width: "300px",
    };

    return (
      <Grid>
        <Container style={paperStyle}>
          <Paper elevation={20}>
            <Grid>
              <img alt="logo" width="50px" src="/icon.png" />
              <h2>Sign Up</h2>
              <Typography variant="caption">
                Veuillez compléter les informations
              </Typography>
            </Grid>
            <form onSubmit={this.handleSubmit}>
              <TextField
                style={textStyle}
                fullWidth
                label="UserName"
                placeholder="Votre nom d'utilisateur"
                required
                onChange={(e) => (this.UserName = e.target.value)}
              />

              <TextField
                style={textStyle}
                fullWidth
                label="Bio"
                placeholder="Votre Bio"
                required
                onChange={(e) => (this.bio = e.target.value)}
              />

              <TextField
                style={textStyle}
                fullWidth
                label="Email"
                placeholder="Votre mail"
                required
                onChange={(e) => (this.email = e.target.value)}
              />

              <TextField
                style={textStyle}
                fullWidth
                type="password"
                label="Password"
                placeholder="Votre mot de passe"
                required
                onChange={(e) => (this.password = e.target.value)}
              />

              <div>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                >
                  Sign in
                </Button>
              </div>
            </form>
          </Paper>
        </Container>
      </Grid>
    );
  }
}
