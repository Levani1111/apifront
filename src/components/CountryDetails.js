import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getCountryAPI from '../util';

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
            <Card.Title>
              CAPITAL CITY: {capital}
            </Card.Title> 
            <h6>AREA: {area} </h6>
            <h6>POPULATION: {population}</h6>
            <img src={flag} alt="flag" />
          </Card.Body>
        </Card>
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
