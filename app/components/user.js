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
            <Image source={{ uri: this.props.user.avatar }} style={styles.user_profile} />
            <Text>{ this.props.user.first_name } { this.props.user.last_name }</Text>
          </View>
          <Image source={{ uri: this.props.user.avatar }} style={styles.post} />
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
