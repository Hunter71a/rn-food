import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { set } from 'react-native-reanimated';


const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchYelpApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'columbus'
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
 // searchYelpApi('pasta');  don't do this --creates infinite loop!

  return <View style={styles.pageStyle}>
    <SearchBar
      query={query}
      onQueryChange={setQuery}
      submitQuery={() => searchYelpApi(query)}

    // more verbose but equivalent syntax!!
    // onQueryChange={newQuery => setQuery(newQuery)}
    // submitQuery={() => searchYelpApi()}

    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text> Searching for: {query}</Text>
    <Text>We Have Found {results.length} results</Text>
  </View>
};

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: '#FFF',
  },

});

export default SearchScreen;