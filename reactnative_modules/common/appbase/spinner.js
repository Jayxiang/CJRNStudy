/**
 * Created：tet-cjx
 * Date：2019/1/31
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import RootSiblings from './../thirdlibs/rootsiblings'

class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  static show(){
    Spinner.current = new RootSiblings(<Spinner></Spinner>);
    return Spinner.current;
  }

  static hide(){
    if(Spinner.current){
      Spinner.current.destroy();
      Spinner.current = undefined;
    }
  }

  componentDidMount() {
    //this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
        <View style={styles.container}>
          <ActivityIndicator size="large"
                             color='#fff'
                             style={{borderRadius:10,height:80,width:80,backgroundColor:'rgba(0,0,0,0.8)'}} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff00',
    paddingVertical: 20,
  },
  progress: {
    margin: 0,
  },
});

module.exports = Spinner;
