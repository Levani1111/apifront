import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getCountryAPI from '../util';
// import Countries from "./countries";

// import axios from "axios";
// import "./Countries";

let countryUrl = `${getCountryAPI()}name/`;


class CountryDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.name);
  }

  componentDidMount() {
    const country = this.props.match.params.name;
    const url = `${countryUrl}${country}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.props.setCountryDetails(response[0]);
      })
      .catch(err => {
        console.error(err);
      });
  }

  displayAsylum = asylum => {
    return (
      asylum &&
      asylum.map(item => {
        return (
          <div className="asylum">
            <p> Origin: {item.Origin}</p>
            <p>
              Country of Asylum or Residence: {item.CountryOfAsylumOrResidence}
            </p>
            <p> Year: {item.year}</p>
            <p> Total: {item.total}</p>
          </div>
        );
      })
    );
  };

  render() {
    const {
      name,
      capital,
      region,
      population,
      demonym,
      flag,
      asylum
    } = this.props.details;
    const asylumInfo = asylum && this.displayAsylum(asylum);
    console.log(asylumInfo);
    return (
      <div>
        <Card>
          <Card.Header as="h4">{name}</Card.Header>
          <Card.Body>
            <Card.Title>Capital City: {capital}</Card.Title>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Demonym: {demonym}</p>
            <p>Flag: </p>
            <img src={flag} alt="flag"/>
          </Card.Body>
        </Card>
        <h3>Asylum Information:</h3>
        <div className="asylumInfo">
        {asylumInfo}
        </div>
      </div>
    );
  }
}

CountryDetails.propType = {
  match: PropTypes.object,
  details: PropTypes.object,
  setCountryDetails: PropTypes.func
};

export default CountryDetails;
