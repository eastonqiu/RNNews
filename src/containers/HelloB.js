import React, { Component } from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  Platform,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class HelloB extends Component {
  static defaultProps = {
      title: 'HelloB',
      navbarColor: '#F3F3F3',
  };

  render() {
    const {title, navbarColor, navigator} = this.props;

    const leftButtonConfig = {
      title: 'Back',
      handler() {
        navigator.pop();
      }
    };

    const rightButtonConfig = {
      title: 'Alert',
      handler() {
        alert('hello B!');
      }
    };

    const titleConfig = {
      title: title,
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig}
          rightButton={rightButtonConfig}
          tintColor={navbarColor} />
      </View>
    );
  }
}
