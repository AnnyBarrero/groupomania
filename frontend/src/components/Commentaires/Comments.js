import React, { Component } from "react";
import {
  Button,
  Container,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import { Card } from "react-bootstrap";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import axios from "axios";


class Comments extends Component {
  state = { comments: [] };
  componentDidMount() {
    axios.get("messages").then(
      (res) => {
        this.setState({
          comments: res.data,
        });
        console.log(res.data);
        console.log(this.state);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: this.id,
      bio: this.bio,
      email: this.email,
      password: this.password,
      content: this.content,
      title: this.title,
      isLike: this.isLike,
      username: this.username,
    };

    axios
      .post("messages/new", data)
      .then((res) => {
        console.log(res.data)
        this.setState({ comments: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Grid>
        <section >
          <Container className="comments-container">
            <div>
              <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
              >
                Créer un nouveau commentaire
              </Typography>
              <form
                autoComplete="off"
                onSubmit={this.handleSubmit}
                className="form-style"
              >
                <TextField
                  label="Titre"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  required
                  onChange={(e) => (this.title = e.target.value)}
                />
                <TextField
                  label="Commentaire"
                  variant="outlined"
                  color="primary"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  onChange={(e) => (this.content = e.target.value)}
                />
                <Button
                  onClick={this.handleSubmit}
                  type="submit"
                  color="primary"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                  className="button-style"
                >
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        </section>
        <section>
          <Container maxWidth="lg" className="message-box">
            {this.state.comments.map((items) => (
              <div className="messagBox-flex">
                <Card key={items.id} border="primary" style={{ width: "18rem" }} className="grid-container">
                  <Card.Header className="Title"> {items.title}</Card.Header>
                  <Card.Body>
                    <Card.Text> {items.username}</Card.Text>
                    <div className="Createdat">
                      <Card.Title className="content">{items.createdAt}</Card.Title>
                    </div>
                    <Card.Text className="Comments">{items.content}</Card.Text>
                    <Card.Img
                      src={`/images/${items.attachment}`}
                      alt="Card image"
                      onError={(i) => (i.target.style.display = "none")}
                    />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Container>
        </section>  
        <br />
      </Grid>
    );
  }
  
}
export default Comments;
