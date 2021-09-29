# Light Sensor app in React-Native

Created for Android API level 3 and higher  
Tested on Nougat (7.0.0) and S (12.0.0) versions of Android  
Device: Pixel 5  
Node versions: lts/erbium (Node 12) - minimum, lts/gallium (Node 16)

## Requirements

- Minimum Node 12 (npm, optionally yarn) - nvm for easier switching
- Java JDK, version 8 and up
- Android Studio
- React-Native CLI + development kit

Follow the steps here to install all the requirements: https://reactnative.dev/docs/environment-setup

## Run the application

After fulfilling all the requirements, clone the repo

To use the recommended node version

```shell
nvm use
```

Install all the packages

```shell
npm install
```

or

```shell
yarn install
```

(Optionally) separately run the Metro bundler in a different terminal window

```shell
npx react-native start
```

Run the Android app

```shell
npm run android
```

or

```shell
yarn android
```

## Debugging

Since Expo SDK 41, `react-native-reanimated` v2 causes the native debug mode to crash. This issue has not been fixed yet, and probably won't be until Expo SDK 43

We use Flipper for debugging instead. Simply install and run the Flipper GUI tool, then run the app as normal. You can then access React DevTools and logs from within the Flipper GUI.

[Flipper installation guide](https://fbflipper.com/docs/getting-started/index)
