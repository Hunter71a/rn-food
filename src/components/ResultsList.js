import React, { Re } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;    
  };  
  
  return <View style={styles.container}>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text style={styles.textStyle}>Results: {results.length}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  textStyle: {
    marginLeft: 15,
    marginBottom: 5,
  }

});

export default withNavigation(ResultsList);