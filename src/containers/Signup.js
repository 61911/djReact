import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import * as actions from "../store/actions/auth";

class Signup extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password1 = event.target.elements.password1.value;
    const password2 = event.target.elements.password2.value;
    if (!this.props.error) {
      this.props.onAuth(username, email, password1, password2);
    }
    this.props.history.push("/");

    console.log(username, email, password1, password2);
  };
  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <Alert color="danger">{this.props.error.message}</Alert>;
    }
    return (
      <div>
        {errorMessage}
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="text">username</Label>
            <Input
              type="text"
              name="username"
              placeholder="enter your username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your E-mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword1">Password</Label>
            <Input
              type="password"
              name="password1"
              id="examplePassword1"
              placeholder="Enter your password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword2">confirm Password</Label>
            <Input
              type="password"
              name="password2"
              id="examplePassword2"
              placeholder="confirm your password"
            />
          </FormGroup>
          <Button htmlType="submit">Submit</Button>
          <div class="pt-3">
            <small class="text-muted">
              Already have An Account?
              <Link class="ml-2" to="/login/">
                Login Now
              </Link>
            </small>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
