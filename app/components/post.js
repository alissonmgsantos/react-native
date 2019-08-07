/**./app
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

const width = Dimensions.get('screen').width;

class Post extends Component {
    render() {
      return (
        <View>
          <View style={styles.header}>
            <Image source={require('../../resources/img/logo.png')} style={styles.user_profile} />
            <Text>{this.props.photo.user}</Text>
          </View>
          <Image source={require('../../resources/img/logo.png')} style={styles.post} />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
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

export default Post;
