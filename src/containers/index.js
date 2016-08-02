import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { original, community, dribbble, cnodejs } from '../route';
import ActivityIndicatorWrapper from '../components/ActivityIndicatorWrapper';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from '../components/TabBar';

export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
    };
  }

  _renderTabBarItem (title, icon, badge, view) {
    return (
      <Navigator
        tabLabel={icon}
        initialRoute={{title: title, component: view, navbarColor: "#F3F3F3"}}
        configureScene={() => {
          return Navigator.SceneConfigs.FadeAndroid
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return (
              <ActivityIndicatorWrapper component={route.component} navigator={navigator} {...route} />
            )
          }
        }} />
    );
  }

  render() {
    return <ScrollableTabView
      style={styles.tabContainer}
      initialPage={0}
      renderTabBar={() => <TabBar />}
      tabBarPosition='bottom'
      locked={false}
      scrollWithoutAnimation={true}
      >
      {this._renderTabBarItem(original.title, original.icon, 0, original.component)}
      {this._renderTabBarItem(community.title, community.icon, 1, community.component)}
      {this._renderTabBarItem(dribbble.title, dribbble.icon, 2, dribbble.component)}
      {this._renderTabBarItem(cnodejs.title, cnodejs.icon, 3, cnodejs.component)}
    </ScrollableTabView>
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
