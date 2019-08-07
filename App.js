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
import User from './app/components/user';

const width = Dimensions.get('screen').width;


class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users')
        .then(reseponse => reseponse.json())
        .then(json => this.setState({ users: json }));
  }

  render() {
    return (
      <FlatList style={styles.container} data={this.state.users.data} keyExtractor={item => item.id} 
      renderItem={({ item }) =>
        <User user={ item }></User>
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
