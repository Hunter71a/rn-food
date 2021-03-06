import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';


const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: ResultDetailScreen,
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Colulmbus Restaurant Search'
    }

  });

export default createAppContainer(navigator);


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Shut up CHUMP! Time to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
