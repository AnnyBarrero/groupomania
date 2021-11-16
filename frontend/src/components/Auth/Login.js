import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import axios from "axios";
import { Container } from "react-bootstrap";

// LOGIN
export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    //J'ai crée les datas var

    const data = {
      email: this.email,
      password: this.password,
    };

    axios
      .post("users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "./Userspage";
      })

      .catch((err) => {
        console.log(err);
        //mensaje de error
        alert("L'utilisateur ou Mot de passe sont invalid");
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

    return (
      <Grid>
        <Container style={paperStyle}>
          <form>
            <div
            //className={classes.toolbar}
            ></div>
            <Paper
              elevation={20}
              //style={paperStyle}
            >
              <Grid>
                <img alt="logo" width="50px" src="/icon.png" />
                <h2>Sign in</h2>
              </Grid>
              <label>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Email adress"
                  onChange={(e) => (this.email = e.target.value)}
                />
              </label>
              <label>
                <p>Password: </p>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) => (this.password = e.target.value)}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                  onClick={this.handleSubmit}
                >
                  Sign in
                </Button>
              </div>
            </Paper>
          </form>
        </Container>
      </Grid>
    );
  }
}
