# React-Native-Minimalist-App

## Test app for React-Native-Minimalist

### NPM Link

In order to make this work you need to link react-native-minimalist with react-native-minimalist-app

To do so in root of react-native-minimalist app run:

npm link

In root of react-native-minimalist app run:

npm link react-native-minimalist

This will create a symbolic link and you'll notice there is a react-native-minimalist folder within node_modules just as if you'd installed from NPM.

Now you can make changes in react-native-minimalist, Haul will automatically detect the change, reload and you can refresh your simulator to see latest changes.

### Running App

This app uses Haul instead of React Native Package Manager because we need Symlinks to work in order to get a decent development flow.

1. npm run ios
2. react-native run-ios
