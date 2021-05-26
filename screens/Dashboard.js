import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
import { LineChart, Path } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import {theme} from '../theme';
import { Block } from '../components';
import mocks from '../settings';

class Dashboard extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    const { navigation, settings } = this.props;
    const BedroomIcon = settings['bedroom'].icon;
    const GarageIcon = settings['garage'].icon;
    const GardenIcon = settings['garden'].icon;
    const KitchenIcon = settings['kitchen'].icon;
    const LivingRoomIcon = settings['livingRoom'].icon;

    return (
      <Block style={styles.dashboard}>
     
        <ScrollView
          contentContainerStyle={styles.buttons}
          showsVerticalScrollIndicator={false}>
          <Block column space="between">
            <Block
              row
              space="around"
              >
              <Card style={styles.test}>
                <CardItem
                  header
                  button
                  onPress={() => navigation.navigate('Bedroom')}>
                  <View style={styles.contentCard}>
                    <BedroomIcon size={100} />
                    <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                      {settings['bedroom'].name}
                    </Text>
                  </View>
                </CardItem>
              </Card>

              <Card style={styles.test}>
                <CardItem
                  header
                  button
                 onPress={() => navigation.navigate('Settings', { name: 'garage' })}>
                  <View style={styles.contentCard}>
                    <GarageIcon size={100} />
                    <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                      {settings['garage'].name}
                    </Text>
                  </View>
                </CardItem>
              </Card>
            </Block>

            <Block
              row
              space="around"
              >
              <Card style={styles.test}>
                <CardItem
                  header
                  button
                 onPress={() => navigation.navigate('Settings', { name: 'garden' })}>
                  <View style={styles.contentCard}>
                    <GardenIcon size={100} />
                    <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                      {settings['garden'].name}
                    </Text>
                  </View>
                </CardItem>
              </Card>

              <Card style={styles.test}>
                <CardItem
                  header
                  button
                  onPress={() => navigation.navigate('Settings', { name: 'kitchen' })}>
                  <View style={styles.contentCard}>
                    <KitchenIcon size={100} />
                    <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                      {settings['kitchen'].name}
                    </Text>
                  </View>
                </CardItem>
              </Card>
            </Block>

            <Block
              row
              space="around"
              >
              <Card style={styles.test}>
                <CardItem
                  header
                  button
                  onPress={() => navigation.navigate('Settings', { name: 'livingRoom' })}>
                  <View style={styles.contentCard}>
                    <LivingRoomIcon size={100} />
                    <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                      {settings['livingRoom'].name}
                    </Text>
                  </View>
                </CardItem>
              </Card>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Dashboard.navigationOptions = navData => {
  return {
    headerTitle: 'All Rooms',
  };
};

Dashboard.defaultProps = {
  settings: mocks,
};

export default Dashboard;

const styles = StyleSheet.create({
  test: {
    width: 160,
    height: 180,
    // padding:3,
    borderRadius: 4,
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
  },
  dashboard: {
    flex: 1,
    padding: 0,
    marginBottom: -theme.sizes.base * 6,
    backgroundColor: 'white',
  },
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  contentCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.colors.button,
  },
});
