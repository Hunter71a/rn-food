import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';


const SearchScreen = () => {
  return <View style={styles.pageStyle}>
    <SearchBar />
    <Text>Search Screen</Text>
  </View>
};

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: '#FFF',
  },

});

export default SearchScreen;