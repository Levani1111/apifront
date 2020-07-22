import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Countries from "./components/countries";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";
import Area from "./components/Area";
import CreateCountry from "./components/CreateCountry";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
  }

  setCountryDetails = details => {
    this.setState({ details: details });
  };

  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/area" component={Area} />
          <Route path="/create" component={CreateCountry} />
          <Route
            path="/country-details/:name"
            render={(routerProps) => (
              <CountryDetails
                setCountryDetails={this.setCountryDetails}
                {...routerProps}
                {...this.state}
              />
            )}
          />
        </main>
        <div class="footer">
          <p>© 2020 Copyright Levani Papashvili</p>
        </div>
    </div>
    );
  }
}

export default App;
