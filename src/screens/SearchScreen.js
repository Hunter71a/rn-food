import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { set } from 'react-native-reanimated';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchYelpApi, results, errorMessage] = useResults(); 
 
  const filterResultsByPrice = (price) => {
    // price === '$' || "$$" || '$$'
    return results.filter(result => {
      return result.price === price;
    })

  }



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
    <Text> We Have Found {results.length} results</Text>
    <Text> example results</Text>
    <ResultsList 
      title="Cost Effective"
      results={filterResultsByPrice('$')}
    />
    <ResultsList 
    title="Bit Pricier"
    results={filterResultsByPrice('$$')}    
    />
    <ResultsList 
    title="Big Spender" 
    results={filterResultsByPrice('$$$')}
    />
  </View>
};

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: '#FFF',
  },

});

export default SearchScreen;