import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <div className="menu">
      <div className="nav justify-content-center fixed-top">
        <Navbar bg="primary" variant="dark">
          <div className="nav">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/home">
                <Button>Home</Button>
              </Link>
              <Link to="/countries">
                <Button>Countries</Button>
              </Link>
              <Link to="/create">
                <Button>Create</Button>
              </Link>
            </Nav>
          </div>
        </Navbar>
      </div></div>
    );
  }
}

export default Header;
