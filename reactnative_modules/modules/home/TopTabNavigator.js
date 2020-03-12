/**
 * Created：tet-cjx
 * Date：2019/2/12
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default class TopTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <MyTabs />;
  }
}

class TopTabHome extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TopHome</Text>
      </View>
    );
  }
}
class TopTabSecond extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TopTabSecond</Text>
      </View>
    );
  }
}
class TopTabThird extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TopTabThird</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

const TopTab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
        },
        tabStyle: {
          minWidth: 50,
        },
        //滑动条样式
        indicatorStyle: {
          height: 2,
          backgroundColor: '#FF812F',
        },
        //是否支持滚动，默认false
        scrollEnabled: true,
        activeTintColor: '#FF812F',
        inactiveTintColor: '#999',
      }}>
      <TopTab.Screen name="TopHome" component={TopTabHome} />
      <TopTab.Screen name="TopSecond" component={TopTabSecond} />
      <TopTab.Screen name="TopThird" component={TopTabThird} />
    </TopTab.Navigator>
  );
}
