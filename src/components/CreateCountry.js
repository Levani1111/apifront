import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getCountryAPI from "../util";
import axios from "axios";


class CreateCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      area: "",
      population: 0,
      
    };
  }

  onChange = e => {
    const val = e.target.value;
    console.log(val);
    this.setState({
      [e.target.name]: val
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(getCountryAPI(), {
        name: this.state.name,
        capital: this.state.capital,
        area: this.state.area,
        population: this.state.population,
      })
      .then(function(response) {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <div className="h_1">
          <h1>CREATE COUNTRY</h1>
        </div>
        <Form className="countryForm" onSubmit={this.submitHandler}>
          <Form.Group controlId="countryName">
            <Form.Label>Country Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Country Name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              First letters should be capitalized.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="capital">
            <Form.Label>Capital</Form.Label>
            <Form.Control
              type="text"
              name="capital"
              placeholder="Capital"
              value={this.state.capital}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="area">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              name="area"
              placeholder="area"
              value={this.state.area}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="population">
            <Form.Label>Population</Form.Label>
            <Form.Control
              type="number"
              name="population"
              placeholder="Population"
              value={this.state.population}
              onChange={this.onChange}
            />
          </Form.Group>
          <div class="text-center">
            <Button variant="primary " type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default CreateCountry;
