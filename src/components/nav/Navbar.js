import React, { Component } from "react";
import Axios from "axios";
import "./Navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Searchbar from "../Search/SearchBar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
//import Logo from "../Logo/Logo";
const url = "http://localhost:8081";

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: [],
      filteredData: []
    };
    this.handleLink = this.handleLink.bind(this);
  }
  handleLink(path) {
    this.props.history.push(path);
  }
  componentDidMount() {
    Axios.get(url).then(response => {
      console.log(response);
      this.setState({ data: response.data });
    });
  }

  render() {
    this.props.data.map(item => this.state.newData.push(item.name));
    let filteredData = [...new Set(this.state.newData)];
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="mx-0">{}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Countries" id="basic-nav-dropdown">
              {filteredData.map(item => (
                <LinkContainer
                  to={`/categories/${item}`}
                  data={this.filteredData}
                >
                  <NavDropdown.Item componentClass={Link}>
                    {item}
                  </NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>
            <LinkContainer to="/add">
              <Nav.Link>Add A Country</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/update">
              <Nav.Link>Update A Country</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/delete">
              <Nav.Link>Remove A Country</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Searchbar data={this.props.data} />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



export default MainNavbar;

