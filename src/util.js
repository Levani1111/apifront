
const API_HOST_LOCAL = "http://localhost:8080/";
const API_HOST = "https://thawing-fjord-63020.herokuapp.com/";

export default function getCountryAPI () {
    let api;
    if(process.env.NODE_ENV === 'production')
        api = API_HOST;
    else
        api = API_HOST_LOCAL;
    return api;
}