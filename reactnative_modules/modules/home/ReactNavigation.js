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
import uibase from '../../common/appbase/uibase'

export default class ReactNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {

    const { params } = navigation.state;
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
  componentDidMount() {
    //页面将获取焦点
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', payload => {
      console.debug('willFocus', payload);
      uibase.showToast('willFocus')
    });
    // 页面已获取到焦点
    // this.didFocusSubscription = this.props.navigation.addListener('didFocus', payload => {
    //   console.debug('didFocus', payload);
    //   uibase.showToast('didFocus')
    // });
    // 页面将失去焦点
    // this.willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
    //   console.debug('willBlur', payload);
    //   uibase.showToast('willBlur')
    // });
    // 页面已经失去焦点
    // this.didBlurSubscription = this.props.navigation.addListener('didBlur', payload => {
    //   console.debug('didBlur', payload);
    //   uibase.showToast('didBlur')
    // });
  }
  componentWillUnmount() {
    this.willFocusSubscription&&this.willFocusSubscription.remove()
    this.didFocusSubscription&&this.didFocusSubscription.remove()
    this.willBlurSubscription&&this.willBlurSubscription.remove()
    this.didBlurSubscription&&this.didBlurSubscription.remove()
  }
  render() {
    return (
        <View style={styles.container}>
          <Button style={{marginTop:15}} title={'改变title'} onPress={this.changeTitle}/>
          <Button style={{marginTop:15}} title={'增加右侧按钮'} onPress={this.showRight}/>
          <Button style={{marginTop:15}} title={'创建TopTabNavigator'} onPress={this.intoTopNavigator}/>
        </View>
    );
  }
  changeTitle =()=>{
    this.props.navigation.setParams({changeTitle: '改变'})
  }
  showRight =()=>{
    this.props.navigation.setParams({rightTitle: '隐藏按钮'})
  }
  intoTopNavigator =()=>{
    this.props.navigation.push('TopTab',{ title: '创建TopTabNavigator' })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
})


