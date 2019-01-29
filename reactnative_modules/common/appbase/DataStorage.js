import React, {
  AsyncStorage
}from 'react-native';

class DataStorage {
  /**
   * 获取
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static get(key,callback) {
    AsyncStorage.getItem(key, function (error, result) {
      if (error) {
        callback('')
      } else {
        console.log(result)
        callback(JSON.parse(result))
      }
    })
  }


  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  static save(key, value) {
    AsyncStorage.setItem(key, JSON.stringify(value), function (error) {
      if (error) {
        return false
      }else {
        return true
      }
    })
  }


  /**
   * 更新
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  static update(key, value) {
    return DeviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }


  /**
   * 删除
   * @param key
   * @returns {*}
   */
  static delete(key) {
    AsyncStorage.removeItem(key, function (error) {
      if (error) {
        return false
      }else {
        return true
      }
    })
  }
}

export default DataStorage;