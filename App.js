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
    <FlatList style={styles.container}
    data={photos}
    keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <View>
          <View style={styles.header}>
            <Image source={require('./resources/img/logo.png')}
              style={styles.user_profile} />
            <Text>{item.user}</Text>
          </View>
          <Image source={require('./resources/img/logo.png')}
            style={styles.post} />
        </View>
      }
    />
  );
};

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
