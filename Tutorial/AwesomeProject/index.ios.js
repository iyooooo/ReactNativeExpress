/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView
} from 'react-native';

export default class AwesomeProject extends Component {

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      this.setState({loading:false, posts}) 
    } catch (e) {
      this.setState({loading:false, error:true})
    }
  }

  renderPost = ({id, title, body}, i) => {
    return (
      <View key={id} style={styles.post}>
        <View style={styles.postNumber}>
          <Text>
            {i+1}
          </Text>
        </View>
        <View style={styles.postContent}>
          <Text>
            {title}
          </Text>
          <Text style={styles.postBody}>
            {body}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const {posts, loading, error} = this.state

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true}/>
        </View>
      )
    }

    if (error) {
      return (
        <View>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {posts.map(this.renderPost)}
        </ScrollView>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 25,  // 比较与paddingVertical区别
  },
  post: {
    flexDirection:'row',
  },
  postNumber: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding:15,
    backgroundColor: 'skyblue',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
