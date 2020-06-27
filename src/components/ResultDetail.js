import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const ResultDetail = ({ result }) => {
  return <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: result.image_url }}
    />
    <Text style={styles.name}>  {result.name}</Text>
    <Text>  {result.rating} Stars, {result.review_count}</Text>
  </View>

};

const styles = StyleSheet.create({
  card: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 140,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  }

});

export default ResultDetail;