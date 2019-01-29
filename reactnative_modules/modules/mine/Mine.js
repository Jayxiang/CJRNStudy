/**
 * Created：tet-cjx
 * Date：2019/1/29
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.container}>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
})
