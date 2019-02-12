/**
 * Created：tet-cjx
 * Date：2019/2/12
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View, Button,
} from 'react-native';

import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

export default class TopTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {

    return {
      title: navigation.getParam('title','创建Top'),
    };
  };
  componentDidMount() {

  }

  render() {
    return (
        <AppContainer/>

    );
  }
}

class TopTabHome extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>TopHome</Text>
        </View>
    );
  }
}
class TopTabSecond extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>TopTabSecond</Text>
        </View>
    );
  }
}
class TopTabThird extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
})

const TopTab = createMaterialTopTabNavigator({
  HomeTab: {
    screen: TopTabHome,
    navigationOptions: {
      tabBarLabel: '第一个',
    }
  },
  TopTabSecond: {
    screen: TopTabSecond,
    navigationOptions: {
      tabBarLabel: '第二个是个长的',
    }
  },
  TopTabThird: {
    screen: TopTabThird,
    navigationOptions: {
      tabBarLabel: '第三个测试',
    }
  },
},{
  tabBarOptions: {
    style:{
      backgroundColor: '#fff'

    },
    tabStyle: {
      minWidth: 50
    },
    //滑动条样式
    indicatorStyle: {
      height: 2,
      backgroundColor: '#FF812F',
    },
    //是否支持滚动，默认false
    scrollEnabled: true,
    activeTintColor:"#FF812F",
    inactiveTintColor:'#999'
  },
})

const AppContainer = createAppContainer(TopTab);
