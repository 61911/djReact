import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class CustomForm extends Component {
  state = {
    image: null,
  };

  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const author = event.target.elements.author.value;
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    let url = "http://djreact-blog.herokuapp.com/api/";
    let form_data = new FormData();
    form_data.append("id", articleID);
    form_data.append("author", author);
    form_data.append("title", title);
    form_data.append("content", content);
    if (this.state.image != null) {
      form_data.append("image", this.state.image, this.state.image.name);
    }

    switch (requestType) {
      case "post":
        return axios
          .post(url, form_data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      case "put":
        return axios
          .put(`http://djreact-blog.herokuapp.com/api/${articleID}/`, {
            author: author,
            title: title,
            content: content,
            image: this.state.selectedFile,
          })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
    }
    console.log("Hey");
    console.log(author, title, content);
  };

  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({
      image: file,
    });
  };
  render() {
    return (
      <Form
        onSubmit={(event) =>
          this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.articleID
          )
        }
      >
        <FormGroup>
          <Label for="Author"> Author </Label>
          <Input type="text" name="author" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Label for="Title"> Title </Label>
          <Input type="text" name="title" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="Content"> Content </Label>
          <Input
            type="text"
            name="content"
            placeholder="write some content.."
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageUpload"> Upload your image. </Label>
          <Input
            type="file"
            name="imageUpload"
            onChange={this.fileChangedHandler}
          />
        </FormGroup>
        <Button color="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CustomForm;
