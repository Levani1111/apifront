import React, { Component } from "react";
import "./Home.css";
import HomeHeader from "../images/HomeHeader";
import Carousel from "../Carousel/Carousel";
import MultiCarousel from "../MultiCarousel/MultiCarousel";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <div className="row">
          <div className="d-none col-md-12">
            <HomeHeader />
          </div>
        </div>
        <div className="row mt-5 mb-3 carousel-row">
          <div className="d-flex col-md-12 flex-column justify-content-center">
            <h2 className="new-cocktails">Recent Additions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Carousel data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;



// import React, { Component } from 'react';
// import Axios from 'axios'


// // const coindeskURL = "http://localhost:80081/countrise";

// // class Home extends Component {
  

//   //  render() {
//   //   return (
//   //      <div>
//   //        {/* <h1>countrise{this.props.match.params.currency}</h1>
//   //        <div className="countrise">{this.props.countrise}</div> */}
//   //        Test
//   //      </div>
//   //    );
//   //  }
 


// class Home extends Component {
//   state = {
//     countries:[]
//   }
//     componentDidMount() {
//       Axios.get(`http://localhost:8081/`)
//       .then(res => {
//         const countries = res.data;
//         this.setState({ countries });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.countries.map(country => <li>{country.name}</li>)}
//       </ul>
//       )
//   }
// }










//     // const currency = this.props.match.params.currency;
//     //const url = "http://localhost:8081/";
//     // const url = "http://pure-journey-76175.herokuapp.com/";
//     //console.log(url);

//    // Axios.get(url)
//    // .then((response) => {
//       /* eslint-disable no-console */
//      // console.log(response);
//       /* eslint-enable no-console */
//       //this.setState({ list: response.data });
//    // })
//    // .catch((error) => {
//       /* eslint-disable no-console */
//      // console.log(error);
//       /* eslint-enable no-console */
//   //  });
//   //};




// export default Home;