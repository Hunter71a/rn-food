import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchYelpApi = async (searchTerm) => {
    // console.log('Searching for this ' + {query});
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'sandusky'
        }
      });
      setResults(response.data.businesses);
      setErrorMessage('');

    } catch (error) {
      console.log(error);
      setErrorMessage('Soory. No results for you.')
    }
  };

  // Call searchAPI when componenet first rendered
  useEffect(() => {
    searchYelpApi('pasta');
  }, []); // don't do this without useEffect --creates infinite loop!
  return [searchYelpApi, results, errorMessage];

};