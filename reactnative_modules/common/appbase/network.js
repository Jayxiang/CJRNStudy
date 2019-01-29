/**
 * Created：tet-cjx
 * Date：2019/1/29
 */
import fetch from '../thirdlibs/fetch-polyfill';

// const baseurl = 'http://192.168.1.7:8180/ShareNum'
// const testurl = 'http://47.92.171.86:8081/ShareNum'
const baseurl = 'http://47.92.171.86:8080/ShareNum'
class network {
  static postRequest(url,params,callback){
    var jsonStr = JSON.stringify(params);
    var pathUrl = baseurl+url;
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: jsonStr,
      timeout: 20 * 1000
    };
    fetch(pathUrl, fetchOptions)
        .then((responseJson) => responseJson.json())
        .then((response) => {
          console.log('response text = ' + response);
          let data = response;
          // alert(JSON.stringify(response))
          if (callback != undefined) {
            callback(response.extend, this.isResponseSuccess(response),response.code);
          }
        }).catch(err => {
      alert(err)
      console.log(err);
      var ret = {
        resMsg:'http访问异常',
        success: false
      }
      if (callback != undefined) {
        callback(ret, false,-1);
      }
    }).done();
  }
  static isResponseSuccess(responseData){
    if(responseData == undefined){
      return false;
    }

    if(responseData.code == 100){
      return true;
    }

    return false;
  }
}

module.exports = network;
