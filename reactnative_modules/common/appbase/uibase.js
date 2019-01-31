/**
 * Created：tet-cjx
 * Date：2019/1/30
 */

import Toast from '../thirdlibs/toast';
import Spinner from './spinner';

class uibase {
  static showToast(text){
    let toast = Toast.show(text,{
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      }
    });
  }
  static showProgress(status){
    if(status){
      Spinner.show();
    }else{
      Spinner.hide();
    }
  }
}

module.exports = uibase;
