import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as actions from "../../store/actions/auth";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-md navbar-dark bg-steel fixed-top"
        light
        expand="md"
      >
        <NavbarBrand href="/">Django React Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-item nav-link" to="/" href="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-item nav-link"
                to="/create/"
                style={{ color: "#cbd5db" }}
              >
                create
              </Link>
            </NavItem>
          </Nav>
          {props.isAuthenticated ? (
            <Link
              className="nav-item nav-link"
              to="/"
              style={{ color: "#cbd5db" }}
              onClick={props.logout}
            >
              Logout
            </Link>
          ) : (
            <Link
              className="nav-item nav-link"
              to="/login/"
              style={{ color: "#cbd5db" }}
            >
              Login
            </Link>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);

