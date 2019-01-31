/**
 * Created：tet-cjx
 * Date：2019/1/30
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,Text
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class ReactNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //
  //   const { params } = navigation.state;
  //   return {
  //     //隐藏导航
  //     // header:null,
  //     title: navigation.getParam('changeTitle','ReactNavigation示例'),
  //     headerRight: (
  //         <Button
  //             onPress={()=>navigation.setParams({rightTitle: ''})}
  //             title={navigation.getParam('rightTitle','')}
  //         />
  //     ),
  //   };
  // };
  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.container}>
          <Button style={{marginTop:15}} title={'改变title'} onPress={this.changeTitle}/>
          <Button style={{marginTop:15}} title={'增加右侧按钮'} onPress={this.showRight}/>
        </View>
    );
  }
  changeTitle =()=>{
    this.props.navigation.setParams({changeTitle: '改变'})
  }
  showRight =()=>{
    this.props.navigation.setParams({rightTitle: '隐藏按钮'})
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    let nav = navigation;
    // ReactNavigation.navigationOptions = ({ navigation, navigationOptions }) =>{
    //   alert(JSON.stringify(navigation.getParam('changeTitle')))
    //   nav.setParams({changeTitle: navigation.getParam('changeTitle')?navigation.getParam('changeTitle'):'ReactNavigation示例'})
    // }
    return {
      //隐藏导航
      // header:null,
      title: navigation.getParam('changeTitle','ReactNavigation示例'),
      headerRight: (
          <Button
              onPress={()=>navigation.setParams({rightTitle: ''})}
              title={navigation.getParam('rightTitle','')}
          />
      ),
    };
  };

  render() {
    return (
        <Appdd/>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
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

const TabNavigator = createBottomTabNavigator({
  ReactNavigation: {
    screen: ReactNavigation,
    navigationOptions: {
      tabBarLabel: 'Tab1',

    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Tab2',

    }
  }
}, {
  tabBarOptions: {
    showIcon:false,
    activeTintColor:'#FF812F',
    inactiveTintColor:'#ddd',
    labelStyle:{
      fontSize:20
    }
  }
});

const Appdd = createAppContainer(TabNavigator);

