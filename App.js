/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

const App = () => {

  const photos = [{ id: 1, user: 'João' }, { id: 2, user: 'Maria' }, { id: 3, user: 'José' }];

  return (
    <FlatList style={{marginTop: 20}}
    data={fotos}
    keyExtractor={item => item.id}
    renderItem={ ({item}) => 
      <View>
        <Image source={require('./resources/img/logo.png')} 
            style={{width:40, height:40}} />
        <Text>{item.usuario}</Text>
        <Image source={require('./resources/img/logo.png')} 
            style={{width:width, height:width}} />
      </View>
    }
  />
  );
};

const styles = StyleSheet.create({
  
});

export default App;
