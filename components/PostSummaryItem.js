import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';


const styles = {
    post_title: {
        fontSize: 20,
        textAlign: 'left',
        color: "black",
        margin: 10,
        marginBottom: 0
      },
      author: {
        fontSize: 11,
        textAlign: 'right',
        color: "grey",
        margin: 10,
        marginTop: 0
      },
}

export default class PostSummaryView extends Component {
    render() {
      return (
        <View>
          <Text style={styles.post_title}>{this.props.post_title}</Text>
          <Text style={styles.author}>{this.props.author}</Text>
        </View>
      )
    }
  }