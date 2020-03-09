import React, { Component } from "react";
import Axios from "axios";
import './App.css';
import Home from '../Home/Home';
import Navbar from "../nav/Navbar";
import { Route } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import Countries from "../Countries/Countries";
import Modal from "../Modal/Modal";
import Category from "../Categories/Category";
import Results from "../Results/Results";
import Categories from "../Categories/Categories";
import About from "../About/About";
import Contact from "../Contact/Contact";
import AddCountry from "../AddCountry/AddCountry";
import UpdateCountry from "../UpdateCountry/UpdateCountry";
import RemoveCountry from "../RemoveCountry/RemoveCountry"



const url = "https://localhost:8081";
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
      this.setState({ data: res, loading: false });
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
          <Route path="/results" component={Results} />
          <Route
            path="/categories"
            exact
            render={() => <Categories data={this.state.data} />}
          />
          <Route
            path="/modal"
            render={() => <Modal data={this.state.data} />}
          />
          <Route path="/add" component={AddCountry} />
          <Route path="/update" component={UpdateCountry} />
          <Route path="/delete" component={RemoveCountry} />
          <Route path="/about" component={About} />
          <Route path="/categories/:name" exact component={Category} />
          <Route path="/contact" component={Contact} />
         
        </main>
      </div>
    );
  }
}

export default App;



