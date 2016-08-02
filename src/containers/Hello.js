import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Platform,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { helloAction } from '../modules/hello';
import {isLoaded, load as loadPosts} from '../modules/posts';
import HelloB from './HelloB';

@connect(state=>({
  helloState: state.hello.param,
  posts: state.posts.data,
  loading: state.posts.loading
}), {helloAction, loadPosts})
@autobind
export default class Hello extends Component {
  static defaultProps = {
      title: 'Hello',
      navbarColor: '#F3F3F3',
  };

  componentWillMount () {
    if (! this.props.loading) {
      this.props.loadPosts();
    }
  }

  sayHello() {
    console.log(this.props.helloState);
    this.props.helloAction('hello action');
  }

  render() {
    const {title, navbarColor, navigator} = this.props;

    /*const leftButtonConfig = {
      title: 'Back',
      handler() {
        navigator.pop();
      }
    };*/

    const rightButtonConfig = {
      title: 'Next',
      handler() {
        navigator.push({
          component: HelloB,
          navbarColor: navbarColor,
        });
      }
    };

    const titleConfig = {
      title: title,
    };
    console.log(this.props.posts);

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          tintColor={navbarColor} />
          <View>
            <Text>
              {Platform.OS == 'web' &&
                <a href="http://www.baidu.com">百度链接</a>
              }
            </Text>
          </View>
          <TouchableHighlight 
            onPress={this.sayHello}
            underlayColor={'transparent'}>
            <Text>Hello Redux</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            underlayColor={'transparent'}>
            <Text>Update</Text>
          </TouchableHighlight>
      </View>
    );
  }
}
