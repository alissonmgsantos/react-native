/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';
import Post from './app/components/post';

const width = Dimensions.get('screen').width;

const photos = [{ id: 1, user: 'João' }, { id: 2, user: 'Maria' }, { id: 3, user: 'José' }];

class App extends Component {
  render() {
    return (
      <FlatList style={styles.container}
      data={photos}
      keyExtractor={item => item.id}
        renderItem={({ item }) =>
        <Post photo={ item }></Post>
        }
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  user_profile: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  post: {
     width: width,
     height: width
  }

});

export default App;
