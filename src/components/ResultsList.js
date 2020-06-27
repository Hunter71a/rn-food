import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../components/ResultDetail';

const ResultsList = ({title, results}) => {
  return <View style={styles.container}>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text style={styles.textStyle}>Results: {results.length}</Text>
    <FlatList 
      horizontal
      data={results}
      keyExtractor={(result)=> results.id}
      renderItem={({item}) => {
        return <ResultsDetail result={item}/>;
      }}
    />
    </View>
};

const styles =StyleSheet.create({
  container: {
    marginBottom:5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  textStyle: {
    marginLeft: 15,
  }

});

export default ResultsList;