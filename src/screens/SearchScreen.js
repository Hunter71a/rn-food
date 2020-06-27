import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { set } from 'react-native-reanimated';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchYelpApi, results, errorMessage] = useResults();

  console.log(results);

  const filterResultsByPrice = (price) => {
    // price === '$' || "$$" || '$$'
    return results.filter(result => {
      return result.price === price;
    })

  }



  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        submitQuery={() => searchYelpApi(query)}

      // more verbose but equivalent syntax!!
      // onQueryChange={newQuery => setQuery(newQuery)}
      // submitQuery={() => searchYelpApi()}
      />
      <ScrollView>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <View style={styles.card}>
          <Text> Searching for: {query}</Text>
          <Text> We Have Found {results.length} results</Text>
          <Text> *******  example results  *******</Text>
        </View>
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
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  card: {
    marginLeft: 20,
    marginBottom: 10
  },

});

export default SearchScreen;