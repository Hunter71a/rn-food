import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchYelpApi = async () => {
    const response = await yelp.get('/search', {
      paramms: {
        limit: 50,
        term: query,
        location: 'columbus'

      }
    });
   
   setResults(response.data.businesses);
  };

  return <View style={styles.pageStyle}>
    <SearchBar
      query={query}
      onQueryChange={newQuery => setQuery(newQuery)}
      submitQuery={query => searchYelpApi(query)}

    />
    <Text>Search Screen</Text>
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