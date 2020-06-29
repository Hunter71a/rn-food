import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList, ScrollView, Scroll } from 'react-native';
import yelp from '../api/yelp';

const ResultDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);

  const getResult = async (id) => {
    // console.log('Searching for this ' + {query});
    // try {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  // } catch (error) {
  //   console.log(error);
  //   setErrorMessage('Soory. No results for you.')
  // }

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Result Detail Screen</Text>
      <Text>{id}</Text>
      <Text>{result.name}</Text>
      <Text>Price: {result.price}</Text>
      <Text>Ave. Rating: {result.rating}</Text>
      <Text>Number of Reviews: {result.review_count}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultDetailScreen;