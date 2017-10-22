/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import PostSummaryView from './components/PostSummaryItem.js';

const post_titles = [
    {title: "Post title 1", auth: "author 1"},
    {title: "Post title 2", auth: "author 2"},
    {title: "Post title 3", auth: "author 3"},
    {title: "This is an extremely long post title that will test the limits of text flowing in the list", auth: "author 4"},
    {title: "Post title 5", auth: "author 5"},
    {title: "Post title 6", auth: "author 6"},
    {title: "Post title 7", auth: "author 3"},
    {title: "Post title 8", auth: "author 2"},
    {title: "Post title 9", auth: "author 7"},
    {title: "Post title 10", auth: "author 9"}
]

export default class App extends Component<{}> {
  render() {
    let keyed_posts = [];
    for (post of post_titles) {
      keyed_posts.push({key: post.title, title: post.title, auth: post.auth})
    }
    return (
      <View style={styles.container}>
        <FlatList
          data = {keyed_posts}
          renderItem={({item}) => <PostSummaryView post_title={item.title} author={item.auth}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
