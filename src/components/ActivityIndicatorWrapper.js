'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorIOS,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class Indicator extends Component {
  static defaultProps = {
      title: 'Hello',
      navbarColor: '#F3F3F3',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.timer = setTimeout(this.loaded.bind(this), 1);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  loaded() {
    this.setState({loading: false});
  }

  render() {
    if(this.state.loading) {
      const {title, navbarColor, navigator} = this.props;
      let leftButtonConfig = <View />; 
      if(navigator.getCurrentRoutes().length > 1) {
        leftButtonConfig = {
          title: 'Back',
          handler() {
            navigator.pop();
          }
        };
      }
     return (
        <View style={{flex: 1}}>
            <NavigationBar
              title={{title: title}}
              leftButton={leftButtonConfig}
              tintColor={navbarColor} />
            {Platform.OS == 'web'?
            <ActivityIndicatorIOS
              animating={true}
              style={[styles.centering, {width: '100%'}]}
              size="large"
            />
            :
            <ActivityIndicator
              animating={true}
              style={styles.centering}
              size="large"
            />
            }
        </View>
      );
    } else if(this.props.component)
      return <this.props.component {...this.props} />;
    else
      return null;
  }
}

const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

