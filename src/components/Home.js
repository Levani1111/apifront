import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>COUNTRIES API</h1>
      <Jumbotron className="jumbotron">
        <p className="homeText">
          <Link to="/countries">
            <Button type="button" className="btn btn-primary btn-lg btn-block">
              <h2>CLICK ME TO </h2>
              <h2>SEE ALL COUNTRIES</h2>
            </Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
