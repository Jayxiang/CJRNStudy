/**
 * Created：tet-cjx
 * Date：2019/2/13
 */

import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

export default class FlatListUse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isRefresh: false,
    };
    this.getData = null;
  }
  static navigationOptions = {
    title: 'FlatListUse',
  };
  componentDidMount() {
    let getData = [];
    let text;
    for (let i = 0; i < 20; i++) {
      if (i % 2 === 0) {
        text =
          '何塞·保罗·贝塞拉·马希尔·儒尼奥尔（José Paulo Bezerra Maciel Júnior），简称保利尼奥[1]';
      } else {
        text =
          '2009年，凭借《倾城之恋》入围韩国首尔电视节，唯一一位亚洲女演员获 韩国首尔电视节最佳女演员提名。' +
          '2011年，获得第十七届上海电视节白玉兰奖“最佳女演员”，' +
          '2011年第六届华鼎奖“最佳女主角”，2012年凭借《铁梨花》荣获“金鹰奖“观众喜爱女演员”奖项';
      }
      getData.push({
        title: i + '行' + text,
      });
    }
    this.getData = getData;
    this.setState({
      data: getData,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={this.renderItem}
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          extraData={this.state}
          onRefresh={this.onRefresh}
          refreshing={this.state.isRefresh}
          //上拉加载
          onEndReachedThreshold={0.1}
          onEndReached={this.onEndReached}
          //解决快速滑动多次加载
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false;
          }}
          ItemSeparatorComponent={this.itemSeparatorComponent}
        />
      </View>
    );
  }
  keyExtractor = (item, index) => {
    item.index = index.toString();
    return item.index;
  };
  onRefresh = () => {
    //不处于下拉刷新
    this.setState({
      isRefresh: true,
    });
    if (!this.state.isRefresh) {
      this.reloadData();
    }
  };
  onEndReached = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.onEndReachedCalledDuringMomentum = true;
      if (this.state.data.length > 100) {
        return;
      }
      for (let i = 0; i < 20; i++) {
        this.getData.push({
          title: i + '行',
        });
      }
      this.setState({
        data: this.getData,
      });
    }
  };
  itemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: '#e1e1e1'}} />;
  };
  renderItem = ({item, index}) => {
    let height = item.height;
    return (
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{marginTop: 15, marginLeft: 15, marginBottom: 15}}
          onLayout={this.titleLayout.bind(this)}>
          {'第' + item.title}
        </Text>
      </View>
    );
  };
  titleLayout(event) {
    let titleHeight = event.nativeEvent.layout.height;
    // alert(titleHeight)
  }

  reloadData() {
    let getData = [];
    for (let i = 0; i < 20; i++) {
      getData.push({
        title: i + '行刷新',
      });
    }
    this.getData = getData;
    this.setState({
      isRefresh: false,
    });
    this.setState({
      data: getData,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
