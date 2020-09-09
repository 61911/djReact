import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Alert,
} from "reactstrap";
import * as actions from "../store/actions/auth";

class Login extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    if (!this.props.error) {
      this.props.onAuth(username, password);
    }
    this.props.history.push("/");
  };
  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <Alert color="danger">{this.props.error.message}</Alert>;
    }
    return (
      <div>
        {errorMessage}
        {this.props.loading ? (
          <Spinner animation="grow" />
        ) : (
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
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button htmlType="submit">Submit</Button>
            <div class="pt-3">
              <small class="text-muted">
                Need An Account?
                <Link class="ml-2" to="/signup/">
                  Sign Up Now
                </Link>
              </small>
            </div>
          </Form>
        )}
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
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
