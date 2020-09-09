import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./router";

import NavBar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import * as actions from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar {...this.props} />
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <BaseRouter />
            </div>
            <div class="col-md-4">
              <SideBar />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
