import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Ingredients/Measures";
import "./Category.css";
import Modal from "../Modal/Modal";

const url = "localhost:8081";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      openModal: null
    };
  }
  componentDidMount() {
    Axios.get(url).then(res => {
      const countries = res.data;
      this.setState({ countries });
    })};
  
  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{this.props.match.params.countryCategory}</h1>
            {this.state.data.map(item => (
              <Modal
                img={
                  <img
                    src={item.countryThumb}
                    className="modal-img"
                    alt={item.countryName}
                  />
                }
                src={item.countryThumb}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Category;