import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div >
      <Jumbotron className="jumbotron" >
        <p className="homeText">
          <Link to="/countries">
            <Button type="button" className="btn btn-primary btn-lg btn-block">
              <h1>CLICK ME TO </h1>
              <h1>SEE ALL COUNTRIES</h1>
            </Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
