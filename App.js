/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './reactnative_modules/modules/home/Home';
import Flexbox from './reactnative_modules/modules/home/Flexbox';
import MyNav from './reactnative_modules/modules/home/ReactNavigation';
// import TopTab from './reactnative_modules/modules/home/TopTabNavigator';
import FlatListUse from './reactnative_modules/modules/home/FlatListUse';
import Mine from './reactnative_modules/modules/mine/Mine';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitle: '返回',
        headerBackTitleStyle: {
          color: '#FF812F',
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#FF812F',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="首页" component={Home} />
      <HomeStack.Screen name="Flexbox" component={Flexbox} />
      <HomeStack.Screen name="导航配置" component={MyNav} />
      {/*<HomeStack.Screen name="TopTab" component={TopTab} />*/}
      <HomeStack.Screen name="FlatListUse" component={FlatListUse} />
    </HomeStack.Navigator>
  );
}

const MineStack = createStackNavigator();

function MineStackScreen() {
  return (
    <MineStack.Navigator
      screenOptions={{
        headerBackTitle: '返回',
        headerBackTitleStyle: {
          color: '#FF812F',
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#FF812F',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MineStack.Screen name="我的" component={Mine} />
    </MineStack.Navigator>
  );
}

const MyTab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              if (focused) {
                return (
                  <Image
                    source={require('./reactnative_modules/res/tabbar/home_icon_pressed.png')}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./reactnative_modules/res/tabbar/home_icon_default.png')}
                  />
                );
              }
            } else if (route.name === '我的') {
              if (focused) {
                return (
                  <Image
                    source={require('./reactnative_modules/res/tabbar/my_icon_pressed.png')}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./reactnative_modules/res/tabbar/my_icon_default.png')}
                  />
                );
              }
            }
          },
        })}
        tabBarOptions={{
          style: {
            borderTopColor: '#e1e1e1',
          },
          activeTintColor: '#FF812F',
          inactiveTintColor: '#999999',
          // 去掉黑线
          // style:{borderTopWidth: 0,},
          // activeTintColor : '#e91e63',
          // inactiveTintColor: '#c0c0c0',
        }}>
        <MyTab.Screen
          name="Home"
          component={HomeStackScreen}
          ////跳转隐藏tabbar
          options={props => {
            return {
              tabBarVisible:
                !props.route.state || props.route.state.index === 0,
            };
          }}
        />
        <MyTab.Screen
          name="我的"
          component={MineStackScreen}
          options={props => {
            return {
              tabBarVisible:
                !props.route.state || props.route.state.index === 0,
            };
          }}
        />
      </MyTab.Navigator>
    </NavigationContainer>
  );
}

export default App;
