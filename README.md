*This module is provided without guarantee or warranty*
=======================================================

# React-Native-Key-Scanner
React Native Android module use for listen native keyboard event, listen scan barcode event and can dismiss keyboard.

### Installation

```bash
npm install @nois/react-native-key-scanner --save
react-native link @nois/react-native-key-scanner
```

## Example usage

Javascript code

```javascript
import KeyboardEvent from 'react-native-key-scanner'
...
componentDidMount() {
    KeyboardEvent.onBarcodeScanner((result) => {
        // do something with result
    });
    KeyboardEvent.onKeyUpListener((result) => {
        // do something with result
    });
}
componentWillUnmount() {
    KeyboardEvent.removeBarcodeScanner();
    KeyboardEvent.removeKeyUpListener();
}
```
Add react-native package in MainApplication.java
```java
import com.nois.rnkeyscanner.KeyboardPackage;
...
//  ReactNativeHost
	@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
		new KeyboardPackage(),
      );
    }
...

```
Implement onKeyDown and onKeyUp in MainActivity.java
```java
import com.nois.rnkeyscanner.KeyboardModule;
import android.view.KeyEvent;
...
	@Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
		KeyboardModule.getInstance().onKeyDownEvent(keyCode, event);
		super.onKeyDown(keyCode, event);
        return true;
	}
	@Override
	public boolean onKeyUp(int keyCode, KeyEvent event) {
		KeyboardModule.getInstance().onKeyUpEvent(keyCode, event);
		super.onKeyUp(keyCode, event);
        return true;
	}
...

```

