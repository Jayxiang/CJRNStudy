/**
 * Created：tet-cjx
 * Date：2019/1/30
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import uibase from '../../common/appbase/uibase';

export default class ReactNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //页面将获取焦点
    this.willFocusSubscription = this.props.navigation.addListener(
      'focus',
      payload => {
        console.debug('focus', payload);
        uibase.showToast('focus');
      },
    );
    // 页面将失去焦点
    // this.willBlurSubscription = this.props.navigation.addListener('blur', payload => {
    //   console.debug('blur', payload);
    //   uibase.showToast('blur')
    // });
  }
  UNSAFE_componentWillMount() {
    this.willFocusSubscription && this.willFocusSubscription.remove();
    this.willBlurSubscription && this.willBlurSubscription.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={{marginTop: 15}}
          title={'改变title'}
          onPress={this.changeTitle}
        />
        <Button
          style={{marginTop: 15}}
          title={'增加右侧按钮'}
          onPress={this.showRight}
        />
        <Button
          style={{marginTop: 15}}
          title={'创建TopTabNavigator'}
          onPress={this.intoTopNavigator}
        />
      </View>
    );
  }
  changeTitle = () => {
    this.props.navigation.setOptions({headerTitle: '标题'});
  };
  showRight = () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => alert('点击')} title="右侧按钮" />
      ),
    });
  };
  intoTopNavigator = () => {
    this.props.navigation.push('TopTab', {title: '创建TopTabNavigator'});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
