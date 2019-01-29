/**
 * Created：tet-cjx
 * Date：2019/1/29
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

  }

  static navigationOptions = ({navigation,screenProps}) => ({
    title: 'flex布局',
  });

  render() {
    return (
        <View style={styles.container}>
          <ScrollView style={styles.flexView}>
            <View style={styles.flex1}>
              <Text style={styles.font1}>
                flexDirection:可以决定布局的主轴,子元素是竖直轴(column默认):
              </Text>
              <View style={styles.colorFlex1}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                flexDirection:水平轴(row):
              </Text>
              <View style={styles.colorFlex}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
            </View>
            <View style={styles.justifyView}>
              <Text style={styles.font1}>
                justifyContent:可以决定其子元素沿着主轴的排列方式flex-start:
              </Text>
              <View style={styles.justifyStart}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                justifyContent:可以决定其子元素沿着主轴的排列方式center:
              </Text>
              <View style={styles.justifyCenter}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                justifyContent:可以决定其子元素沿着主轴的排列方式flex-end:
              </Text>
              <View style={styles.justifyEnd}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                justifyContent:可以决定其子元素沿着主轴的排列方式space-around:
              </Text>
              <View style={styles.justifyAround}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                justifyContent:可以决定其子元素沿着主轴的排列方式space-between:
              </Text>
              <View style={styles.justifyBetween}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
            </View>
            <View style={styles.alignView}>
              <Text style={styles.font1}>
                alignItems可以决定其子元素沿着次轴flex-start:
              </Text>
              <View style={styles.alignStart}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                alignItems可以决定其子元素沿着次轴center:
              </Text>
              <View style={styles.alignCenter}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                alignItems可以决定其子元素沿着次轴flex-end:
              </Text>
              <View style={styles.alignEnd}>
                <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
              </View>
              <Text style={styles.font1}>
                alignItems可以决定其子元素沿着次轴stretch:
              </Text>
              <View style={styles.alignStretch}>
                <View style={{width: 25, backgroundColor: 'powderblue'}} />
                <View style={{width: 25, backgroundColor: 'skyblue'}} />
                <View style={{width: 25, backgroundColor: 'steelblue'}} />
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  flexView: {

  },
  flex1: {
    backgroundColor: '#fff',
  },
  font1: {
    fontSize: 15,
  },
  colorFlex: {
    flexDirection: 'row',
  },
  colorFlex1: {
    flexDirection: 'column',
  },
  justifyView: {

  },
  justifyStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  justifyEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  justifyAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignView: {
    backgroundColor: 'whitesmoke',
  },
  alignStart: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  alignCenter: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignEnd: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  alignStretch: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cjx: {
    color: "rgba(215,36,36,1)",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
