import React, { Component } from "react";
// import { Link } from "react-router-dom";
const url = "https://localhost:8081";
class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const value = this.props.match.params;
    console.log(this.props.match.params);
    fetch(`${url}${value}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
        // console.log(res);
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>{this.props.match.params.country}</h1>
        {this.state.data.map((item, i) => (
          <div key={this.state._id}>
            {/* <h1>{item.props.match.params._id}</h1> */}
          </div>
        ))}
      </div>
    );
  }
}
export default Country;
