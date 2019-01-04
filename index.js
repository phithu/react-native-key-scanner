import { DeviceEventEmitter, NativeModules } from 'react-native';

export default class KeyboardEvent {
  listenerKeyDown = null;
  listenerKeyUp = null;
  listenerKeyMultiple = null;
  listenerBarcodeScan = null;

  static onKeyDownListener(cb) {
    this.removeKeyDownListener();
    this.listenerKeyDown = DeviceEventEmitter.addListener('onKeyDown', cb);
  }

  static removeKeyDownListener() {
    if (this.listenerKeyDown) {
      this.listenerKeyDown.remove();
      this.listenerKeyDown = null;
    }
  }

  static onKeyUpListener(cb) {
    this.removeKeyUpListener();
    this.listenerKeyUp = DeviceEventEmitter.addListener('onKeyUp', cb);
  }

  static removeKeyUpListener() {
    if (this.listenerKeyUp) {
      this.listenerKeyUp.remove();
      this.listenerKeyUp = null;
    }
  }

  static onKeyMultipleListener(cb) {
    this.removeKeyMultipleListener();
    this.listenerKeyMultiple = DeviceEventEmitter.addListener('onKeyMultiple', cb);
  }

  static removeKeyMultipleListener() {
    if (this.listenerKeyMultiple) {
      this.listenerKeyMultiple.remove();
      this.listenerKeyMultiple = null;
    }
  }

  static onBarcodeScanner(cb) {
    this.removeBarcodeScanner();
    this.listenerBarcodeScan = DeviceEventEmitter.addListener('barcode_scan', cb);
  }

  static removeBarcodeScanner() {
    if (this.listenerBarcodeScan) {
      this.listenerBarcodeScan.remove();
      this.listenerBarcodeScan = null;
    }
  }

  static setSubmitKeycode(keycode) {
    NativeModules.KeyboardEvent.setSubmitKeycode(keycode);
  }

  static hideKeyboard() {
    NativeModules.KeyboardEvent.hideKeyboard();
  }
}
