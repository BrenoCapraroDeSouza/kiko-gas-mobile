import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight as getStatusBarIphoneHeight } from 'react-native-iphone-screen-helper';

export function isIos(): boolean {
  return Platform.OS === 'ios';
}

export function isAndroid(): boolean {
  return Platform.OS === 'android';
}

export function getStatusBarHeight(): number {
  return isIos() ? StatusBar.currentHeight! : getStatusBarIphoneHeight();
}
