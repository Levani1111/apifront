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
      region: "",
      population: 0,
      demonym: ""
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
        region: this.state.region,
        population: this.state.population,
        demonym: this.state.demonym
      })
      .then(function(response) {
        console.log(response);
      });
  };

  render() {
    return (
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

        <Form.Group controlId="region">
          <Form.Label>Region</Form.Label>
          <Form.Control
            type="text"
            name="region"
            placeholder="Region"
            value={this.state.region}
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

        <Form.Group controlId="demonym">
          <Form.Label>Demonym</Form.Label>
          <Form.Control
            type="text"
            name="demonym"
            placeholder="Demonym"
            value={this.state.demonym}
            onChange={this.onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CreateCountry;
