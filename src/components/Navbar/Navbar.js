import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as actions from "../../store/actions/auth";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
          <div class="container">
            <Link class="navbar-brand mr-4" to="/">
              Django React Blog
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggle">
              <div class="navbar-nav mr-auto">
                <Link
                  class="nav-item nav-link"
                  to="/"
                  style={{ color: "#cbd5db" }}
                >
                  Home
                </Link>
                <Link
                  class="nav-item nav-link"
                  to="/create/"
                  style={{ color: "#cbd5db" }}
                >
                  create
                </Link>
              </div>
              {this.props.isAuthenticated ? (
                <Link
                  class="nav-item nav-link"
                  to="/"
                  style={{ color: "#cbd5db" }}
                  onClick={this.props.logout}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  class="nav-item nav-link"
                  to="/login/"
                  style={{ color: "#cbd5db" }}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
