import React, { Component } from 'react';
import Axios from 'axios'


// const coindeskURL = "http://localhost:80081/countrise";

// class Home extends Component {
  

//   render() {
//     return (
//       <div>
//         {/* <h1>countrise{this.props.match.params.currency}</h1>
//         <div className="countrise">{this.props.countrise}</div> */}
//         Test
//       </div>
//     );
//   }
// }



class Home extends Component {
    componentDidMount() {
    // const currency = this.props.match.params.currency;
    const url = "http://localhost:8081/";
    console.log(url);

    Axios.get(url)
      .then(response => {console.log(response)})
    //   .then(response => {
    //     // let newCountrise = response.bpi[currency].rate;
    //     // this.props.setCountrise(newCountrise);
    //   })
      .catch(err => {
        console.error(err);
      });
  }
    render() {
        return (
          <div>
           
            </div>
         
        );
    };
}

export default Home;