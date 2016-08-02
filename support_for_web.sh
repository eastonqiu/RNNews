#!/bin/bash
cp ./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf ./android/app/src/main/assets/fonts/
cp ./modified/create-icon-set.js ./node_modules/react-native-vector-icons/lib/create-icon-set.js
cp ./modified/IconToggle.js ./node_modules/react-native-material-design/lib/IconToggle.js
cp ./modified/Avatar.js ./node_modules/react-native-material-design/lib/Avatar.js
cp ./modified/SplashScreen.java ./node_modules/rn-splash-screen/android/src/main/java/com/mehcode/reactnative/splashscreen/SplashScreen.java
cp ./node_modules/react-native-scrollable-tab-view/Button.ios.js ./node_modules/react-native-scrollable-tab-view/Button.js
cp ./modified/ViewPager.web.js_mod ./node_modules/react-web/lib/ViewPager/ViewPager.web.js
