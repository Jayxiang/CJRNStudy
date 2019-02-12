/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet,Image} from 'react-native';
import { createBottomTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';

import Home from './reactnative_modules/modules/home/Home'
import Flexbox from './reactnative_modules/modules/home/Flexbox'
import ReactNavi from './reactnative_modules/modules/home/ReactNavigation'
import TopTab from './reactnative_modules/modules/home/TopTabNavigator'
import Mine from './reactnative_modules/modules/mine/Mine'

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const NavHome = createStackNavigator(
    {
      Home: {
        screen: Home,    // 默认启动页后会进入第一个路由视图中
      },
      Flexbox: {
        screen:Flexbox,
      },
      ReactNavi: {
        screen:ReactNavi,
      },
      TopTab: {
        screen:TopTab,
      }
    },
    {
      /* 指定初始化路由*/
      initialRouteName: 'Home',
      /* 统一配置所有页面的头部 */
      defaultNavigationOptions: {
        headerBackTitle:'返回',
        headerBackTitleStyle:{
          color:'#FF812F',
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          borderBottomWidth:1,
          borderBottomColor:'#e1e1e1'
        },
        headerTintColor: '#FF812F',
        headerTitleStyle: {
          fontWeight: 'bold',
          color:'#2a2a2a'
        },
      },
    }
);
const NavMine = createStackNavigator(
    {
      Mine: {
        screen: Mine,    // 默认启动页后会进入第一个路由视图中
      },
    },
    {
      /* 指定初始化路由*/
      initialRouteName: 'Mine',
      /* 统一配置所有页面的头部 */
      defaultNavigationOptions: {
        headerBackTitle:'返回',
        headerBackTitleStyle:{
          color:'#FF812F',
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          borderBottomWidth:1,
          borderBottomColor:'#e1e1e1'
        },
        headerTintColor: '#FF812F',
        headerTitleStyle: {
          fontWeight: 'bold',
          color:'#2a2a2a'
        },
      },
    }
);
const MyTab = createBottomTabNavigator({
  HomeTab: {
    screen: NavHome,
  },
  MineTab: {
    screen: NavMine,
  },
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarLabel:navigation.state.routeName=='HomeTab'?'常用功能':'我',
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'HomeTab') {
        if (focused) {
          return <Image source = {require('./reactnative_modules/res/tabbar/home_icon_pressed.png')} />;
        } else {
          return <Image source = {require('./reactnative_modules/res/tabbar/home_icon_default.png')} />;
        }
      } else if (routeName === 'MineTab') {
        if (focused) {
          return <Image source = {require('./reactnative_modules/res/tabbar/my_icon_pressed.png')} />;
        } else {
          return <Image source = {require('./reactnative_modules/res/tabbar/my_icon_default.png')} />;
        }
      }
    },
    //tabbar点击事件
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      const navigationInRoute = navigation.getChildNavigation(navigation.state.routes[0].key);
      // navigationInRoute.isFocused()
      if (!!navigationInRoute && !!navigationInRoute.state.params && !!navigationInRoute.state.params.tabBarClick) {
        navigationInRoute.state.params.tabBarClick();
      }
      defaultHandler();
    },
  }),
  tabBarOptions: {
    style:{
      borderTopColor:'#e1e1e1',

    },
    activeTintColor:"#FF812F",
    inactiveTintColor:'#999999'
    // 去掉黑线
    // style:{borderTopWidth: 0,},
    // activeTintColor : '#e91e63',
    // inactiveTintColor: '#c0c0c0',
  },

  initialRouteName: 'HomeTab',
  // 后退按钮是否会导致标签切换到初始tab
  backBehavior: 'none',
})
//跳转隐藏tabbar
NavHome.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
NavMine.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const AppContainer = createAppContainer(MyTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
