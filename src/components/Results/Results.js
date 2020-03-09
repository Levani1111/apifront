import React, { Component } from "react";
import Currencies from "../Ingredients/Currencies";
import Languages from "../Ingredients/Languages";
import "./Results.css";
import "../Categories/Category.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: this.props.location.state.results
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      resultData: nextProps.location.state.results
    });
  }
  render() {
    return (
      <div>
        <h1>Look at the Countries!</h1>
        {this.state.resultData.map(country => (
          <div className="category-country" key={country.id}>
            <h2>{country.name}</h2>
            <img src={country.flag} alt={country.name} />

            <ul className="categoryData">
              <li>Capital:{" " + country.capital}</li>
              <li>Population:{" " + country.population}</li>
              <li>
                Languages:
                <span>
                  <Languages data={country.languages} />
                </span>
              </li>
              <li>
                Currencies: <Currencies data={country.currencies} />
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
export default Results;
