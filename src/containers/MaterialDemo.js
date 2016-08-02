import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Platform,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import { Avatars, Buttons, Checkboxes, Dividers, IconToggles, RadioButtons, Subheaders } from '../demo_scenes';

export default class MatetialDemo extends Component {
  static defaultProps = {
      title: 'MatetialDemo',
      navbarColor: '#F3F3F3',
  };

  render() {
    const {title, navbarColor, navigator} = this.props;

    const titleConfig = {
      title: title,
    };

    return (
      <ScrollView style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          tintColor={navbarColor} />
        
        <Avatars />

        <Buttons />
        
        <Checkboxes />

        <Dividers />
        
        <IconToggles />

        <RadioButtons />
        
        <Subheaders />

      </ScrollView>
    );
  }
}
