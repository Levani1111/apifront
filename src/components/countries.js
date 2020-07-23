import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import getCountryAPI from '../util';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(getCountryAPI())
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data: data });
      });
  }
   render() {
    let countries = this.state.data.map(item => {
      return (
         <div className="country" key={item.id}>
          <Card
            style={{
              width: "18rem",
              }}
          >
            <div
              className="flag"
              style={{ backgroundImage: `url(${item.flag})` }}
            ></div>
            <Card.Body>
              <Card.Title className="cardTitle">{item.name}</Card.Title>
              <Card.Text className="cardText">
                Capital: {item.capital}
              </Card.Text>
              <Link to={"country-details/" + item.name}>
                <Button className="countryInfoButton" variant="btn btn-primary">
                  COUNTRY INFO
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        );
    });
    return <div className="countryContainer">{countries}</div>;
  }
}

export default Countries;
