import React, { Component } from "react";
import Axios from "axios";
//import Currencies from "../Ingredients/Currencies";
//import Languages from "../Ingredients/Languages";
import "./Category.css";
import Modal from "../Modal/Modal";

const url = "http://localhost:8081";
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
            <h1>{this.props.match.params.name}</h1>
            {this.state.data.map(item => (
              <Modal
                img={
                  <img
                    src={item.flag}
                    className="modal-img"
                    alt={item.name}
                  />
                }
                src={item.flag}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Category;