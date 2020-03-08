import React, { Component } from "react";
import Axios from "axios";
import './App.css';
import Home from '../Home/Home';
import Navbar from "../nav/Navbar";
import { Route } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import Countries from "../Countries/Countries";

const url = "localhost:8081";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
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
      <div className="main-container">
        <nav>
          <Navbar data={this.state.data} />
        </nav>
        <main className="p-0">
          <Route
            path="/"
            exact
            render={() => <Home data={this.state.data} />}
          />
          <Route
            path="/countries"
            render={() => <Countries data={this.state.data} />}
          />
          <Route
            path="/search"
            render={() => <SearchBar data={this.state.data} />}
          />
        </main>
      </div>
    );
  }
}

export default App;



