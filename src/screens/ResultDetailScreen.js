import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const ResultDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return <View>
    <Text>Result Detail Screen</Text>
    <Text>{id}</Text>
  </View>
};

const styles = StyleSheet.create({


});

export default ResultDetailScreen;