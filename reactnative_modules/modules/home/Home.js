/**
 * Created：tet-cjx
 * Date：2019/1/29
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  YellowBox
} from 'react-native';
import uibase from '../../common/appbase/uibase';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  data = [
    { key: 0, name: "Flexbox布局", navigation: "Flexbox" },
    { key: 1, name: 'React Navigation使用', navigation: 'ReactNavi' },
    { key: 2, name: 'FlatList使用', navigation: 'FlatListUse' },
  ];

  //在这里定义每个页面的导航属性
  static navigationOptions = {
    title: '常用功能'
    //设置返回此页面的返回按钮文案,有长度限制
    // headerBackTitle:'返回',
  };

  componentDidMount() {
    // uibase.showToast('componentDidMount')
    // uibase.showProgress(true)
    //去掉警告
    // console.disableYellowBox = true;
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={this.renderItem}
          data={this.data}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
  _keyExtractor = (item, index) => {
    item.index = index.toString();
    return item.index;
  };
  renderItem = ({ item, index }) => {
    var title = item.name;
    return (
      <TouchableOpacity onPress={this.onPress.bind(this, index)}>
        <View style={styles.table}>
          <Text style={{ fontSize: 15, color: '#2a2a2a', marginLeft: 15 }}>
            {title}
          </Text>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#eee' }} />
      </TouchableOpacity>
    );
  };
  onPress = index => {
    var nav = this.data[index].navigation;
    const { navigation } = this.props;
    navigation.navigate(nav);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  table: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 44,
    alignItems: 'center'
  }
});
