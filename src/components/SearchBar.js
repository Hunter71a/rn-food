import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ query, onQueryChange, submitQuery }) => {
  return <View style={styles.backgroundStyle}>
    <FontAwesome5 name="skull" style={styles.iconStyle} />
    {/* <Feather name="search" size={34} color="black" /> */}
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Search'
      style={styles.inputStyle}
      value={query}
      onChangeText={onQueryChange}
      onEndEditing={submitQuery}

      // alternate, more verbose but equivalent syntax
      // onChangeText={newQuery => onQueryChange(newQuery)}
      // onEndEditing={() => submitQuery()}
    />
  </View>
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 35,
    color: "gray",
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
    padding: 10,
  },


});

export default SearchBar;