import React, { Component } from "react";

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    let currencies = this.props.data.map(i => {
      return i.countryLanguages;
    });
    console.log(Languages);
    return (
      <div>
        <ul>
          {this.props.data.map(item => (
            <li key={item.toString()}>{item + " "}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Languages;
