import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const SearchBar = () => {
  return <View style={styles.background}>
    <FontAwesome5 name="skull" size={34} color="black" />
    {/* <Feather name="search" size={34} color="black" /> */}
    <Text style={{fontSize: 30}}>  Search Bar</Text>
  </View>
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5, 
    marginHorizontal: 15,
    marginTop: 10,
  },

});

export default SearchBar;