# shakebug-react-native


<a href="https://www.shakebug.com"><img src="https://www.shakebug.com/assets/images/logo.png"></a>

Shakebug allows users to report the bug from your mobile phone for your application. Here users just need to shake their mobile and all the data regarding bugs & crashes can be seen by developers through their log in panel easily.

For more info, visit [shakebug.com](https://www.shakebug.com).



## Installation

Navigate to your React Native project directory and install `shakebug-react-native`

```bash
 npm install shakebug-react-native
```

Or if you prefer to use Yarn instead of npm:

```bash
 yarn add shakebug-react-native
```

### iOS

1. You need to provide permissions inside `ios/YourProjectName/info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string></string>

<key>NSMicrophoneUsageDescription</key>
<string></string>

<key>NSPhotoLibraryUsageDescription</key>
<string></string>
```

2. CocoaPods installation:

```bash
    cd ios && pod install && cd ..
```

### Android

Android minSdkVersion 24 required
You can change it in `android/build.gradle`

```bash
    buildscript {
        ...
        ext {
            ...
            minSdkVersion = 24 or later
            ...
        }
        ...
    }
```

## Usage

you Need to import ShakebugView in root file of application (App.js)


```javascript

Import ShakebugView from 'shakebug-react-native';

export default App = () => {
    return(
        <ShakebugView 
            Android_appkey= “your android app key”  
            iOS_appkey= “your ios app key”
            other options...
        >
            //Your code...
        </ShakebugView>
    )	
} 
```

If you use NavigationContainer in App.js/root file (where you import ShakebugView) then you need to pass independent as parameter in NavigationContainer

```javascript

Import ShakebugView from 'shakebug-react-native';

export default App = () => {
    return(
        <ShakebugView 
            Android_appkey= “your android app key”  
            iOS_appkey= “your ios app key”
            other options…
        >
	        <NavigationContainer independent>
                //Your code...	
	        </NavigationContainer>
        </ShakebugView>
    )	
}

```
You can add event on click:

```javascript

import { Button } from 'react-native';
import ShakebugView, { addEventKey } from 'react-native-shakebug';

export default App = () => {
    return(
        <Button 
            title='Prees'
            onPress={() => {
                addEventKey("key_name", value)
            }}
        />
    )
}

```

## Properties

<table>
    <tr>
        <th>Key Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Default Value</th>
    <tr>
    <tr>
        <td>Android_appkey</td>
        <td>String(required)</td>
        <td>This initializes Shake Bug with the default invocation event. Be sure to pass <Your Key> your application key which given by ShakeBug website.</td>
        <td></td>
    </tr>
       <tr>
        <td>iOS_appkey</td>
        <td>String(required)</td>
        <td>This initializes Shake Bug with the default invocation event. Be sure to pass <Your Key> your application key which given by ShakeBug website.</td>
        <td></td>
   </tr>
    <tr>
        <td>showTutorialScreenFirstTime</td>
        <td>boolean</td>
        <td>Add the following for enabling/disabling first time tutorial screen.</td>
        <td>true</td>
    </tr>
    <tr>
        <td>ShakebugThemeColor</td>
        <td>String</td>
        <td>Developer can also set custome theme color in Shakebug SDK screens.</td>
        <td></td>
    </tr>
    <tr>
        <td>changeSDKScreenTitle</td>
        <td>Array</td>
        <td>Developer can also set custom title for Shakebug annotate and feedback input screen.</td>
        <td>["Annotate your bug", "Add Details"]</td>
    </tr>
    <tr>
        <td>allowToReportBugByShakingMobile</td>
        <td>boolean</td>
        <td>Add the following to allow report bug by shaking mobile.</td>
        <td>true</td>
    </tr>
    <tr>
        <td>allowToReportBugByScreenCapture</td>
        <td>boolean</td>
        <td>Add the following to allow report bug by screenshot capture event.</td>
        <td>false</td>
    </tr>
    <tr>
        <td>ShakebugLanguage</td>
        <td>String</td>
        <td>If you want to set forcefully any language for the bug reporting screen then use following prop.</td>
        <td>Your Device's language</td>
    </tr>
    <tr>
        <td>allowCrashReport</td>
        <td>boolean</td>
        <td>If you want to allow report crash while app get crashed then use following prop.</td>
        <td>true</td>
    </tr>
    <tr>
        <td>makeLogEnabled</td>
        <td>boolean</td>
        <td>If you want to show any logs on console then use following prop.</td>
        <td>false</td>
    </tr>
    <tr>
        <td>setShakebugSDKEndPointURL</td>
        <td>Array</td>
        <td>If you have on-premise hosting plan then following prop will be used.</td>
        <td></td>
    </tr>
</table>

## Methods

<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Usage</th>
    </tr>
    <tr>
        <td>addEventKey</td>
        <td>If you want add event to any screen or activity use following method</td>
        <td>addEventKey("Key_name", value)</td>
    </tr>
</table>

## Documentation

[View our documentation](https://www.shakebug.com/installation#react). 

## Contact

Visit on: [https://www.shakebug.com](https://www.shakebug.com).

Contact us on [support@shakebug.com](mailto:support@shakebug.com) in case of any use.