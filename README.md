# RNNews

A cross platform starter for react-native + web + redux + codepush.
Support for IOS, Android and Web.

# Getting Start
***Clone this repository to local and enter the root dir.***

All the commands should run on the root directory of project.
- Env
Nodejs version > 5 and < 6. (5.7.0 recomended)
Use [nvm](https://github.com/creationix/nvm) to manage nodejs versions.
- Install
```
npm install -g react-web-cli  # use react-web for web environment
npm install -g code-push-cli # use code push for updating dynamically
npm install  # install all dependent modules
```
resource setting and hack some modules to support web, you can refer to `support_for_web.sh` for more details.
```
./support_for_web.sh
```
- Icon Font
Icon fonts setting for android automaticallyI(support_for_web.sh), ios coming soon. (you need set it manually for IOS, refer to [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#ios))
- copy config, config file is gitignore and specified in local env.
```
cp src/config.js.example src/config.js
```

# Dev Running

- IOS
```
react-native run-ios
```
- Android
```
react-native run-android
```
- Web
```
react-web start
```
This command will start the web dev server and use Hot Module Reloading.
Open http://localhost:3000 in browser.

# Release App

- IOS
coming soon...

- Android
   - Config release key store, refer to 
http://facebook.github.io/react-native/releases/0.28/docs/signed-apk-android.html
   - Generate apk
```
cd android && ./gradlew assembleRelease
```
The generated APK can be found under android/app/build/outputs/apk/app-release.apk
Test the apk on device.

- Web
Bundle the release version:
```
react-web bundle
```
webpack will generate the release bundle in web/output and link the icon font folder ([react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)).
Using Http Server(apache or nginx, etc...) to show the `index.html` in `web/output`.

# Dynamic Update for IOS and Android

More details, please refer to [react-native-code-push](https://github.com/Microsoft/react-native-code-push).
Some bash scripts in the project make it simple.
- IOS
   coming soon...
- Android
```...
./bundle.android.sh         # generate release bundle for android
./codepush_release.sh     # release a new version to code push server
```
show the deployment history
```
./codepush_history.sh
```

# Custom Splash

Use [rn-splash-screen](https://github.com/mehcode/rn-splash-screen)
- IOS
   coming soon...
- Android
   Replace the splash image in the `android/app/src/main/res/drawable/splash.png`

# TODO
- Reference List (Thanks)
- Hack for web.
- Support above `coming soon...`
- Show a redux flow sample in doc
- Add react-router for web
- Add Server Side Rendering(SSR) for web
- Rename app name

# Issues
Issues are welcome, just commit PR.

# License
[MIT License](http://opensource.org/licenses/mit-license.html)
