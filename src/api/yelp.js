import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer p49G3wdY9gx11mMFY5ar-zAwFVGMuW2L-uIVzUH0pOY7DFdXHFFjsJ1WgG--UO7kNeNnAj9u3tv6btNIHoDnVS4MXPgB0-es3ZDUYQZ2I0DyA7RPKluD8F4CnC_1XnYx'
  }
});