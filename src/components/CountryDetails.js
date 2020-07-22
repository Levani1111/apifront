import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getCountryAPI from '../util';
//  import Countries from "./countries";

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
      .then((response) => response.json())
      .then((response) => {
        this.props.setCountryDetails(response[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  displayLanguages = (languages) => {
    return (
      languages &&
      languages.map((item) => {
        return (
          <div className="languages">
            <p> languages: {item.languages}</p>
            {/* <p>
              Country of Asylum or Residence:{" "}
              {item.CountryOfLanguagesOrResidence}
            </p> */}
            {/* <p> Year: {item.year}</p>
            <p> Total: {item.total}</p> */}
          </div>
        );
      })
    );
  };

  render() {
    const {
      name,
      capital,
      area,
      population,
      flag,
      languages,
    } = this.props.details;
    const languagesInfo = languages && this.displayLanguages(languages);
    console.log(languagesInfo);
    return (
      <div className="cart_details">
        <Card>
          <Card.Header as="h1">{name}</Card.Header>
          <Card.Body>
            <Card.Title>Capital City: {capital}</Card.Title>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            {/* <p>NativeName: {nativeName}</p> */}
            <p>Flag: </p>
            <img src={flag} alt="flag" />
          </Card.Body>
        </Card>
        {/* <h3>languages Information:</h3>
        <div className="languagesInfo">{languagesInfo}</div> */}
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
