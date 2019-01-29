/**
 * Created by tet-cjx
 * Date:2018/9/6
 */
import React from 'react';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class BaseComponent extends React.Component{
  constructor(props){
    super(props);

    if(this.props.isNaviComponent){
      this.navigator.registerPageInstance(this);
    }

    this.screenWidth = ScreenWidth;
    this.screenHeight = ScreenHeight;

  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillUpdate(nextProps, nextState){

  }

  componentDidUpdate(prevProps, prevState){

  }

  componentWillUnmount(){
  }

}

module.exports = BaseComponent;
