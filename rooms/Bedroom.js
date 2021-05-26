import React, { useState } from 'react';
import { StyleSheet, Slider } from 'react-native';
import { Text } from 'react-native-paper';
import { Content, Card, CardItem, Body, Switch } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Block, PanSlider } from '../components';
import { theme } from '../theme';

export default function Bedroom(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [direction, setDirection] = useState(20);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Content padder>
      <Card>
        <CardItem header bordered style={styles.lightHeader}>
          <Content
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <MaterialCommunityIcons
              size={20}
              color={theme.colors.accent}
              name="lightbulb"
              {...props}
            />
            <Text>Lights</Text>
          </Content>
          <Switch
            trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
            thumbColor="#f4f3f4"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>PANASONIC AC 3 P</Text>
          </Body>
        </CardItem>
      </Card>

      <Card>
        <CardItem header bordered style={styles.lightHeader}>
          <Content
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <MaterialCommunityIcons
              size={20}
              color={theme.colors.accent}
              name="lightbulb"
              {...props}
            />
            <Text>Curtains</Text>
          </Content>
          <Switch
            trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
            thumbColor="#f4f3f4"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </CardItem>
        <CardItem bordered>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Block>
              <Text style={{ marginVertical: theme.sizes.base * 2 }}>
                Brightness
              </Text>
              <PanSlider />
            </Block>
            <Block
              column
              style={{ marginVertical: theme.sizes.base * 2, width: '100%' }}>
              <Block row space="between">
                <Text welcome color="black">
                  Direction
                </Text>
                <Text>{direction}</Text>
              </Block>
              <Slider
                value={20}
                mininumValue={0}
                maximumValue={100}
                thumbTintColor={theme.colors.accent}
                minimumTrackTintColor={theme.colors.accent}
                maximumTrackTintColor={theme.colors.gray2}
                onValueChange={(value) => setDirection(Math.floor(value, 10))}
              />
            </Block>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
}

Bedroom.navigationOptions = (navData) => {
  return {
    headerTitle: 'Bedroom',
  };
};

const styles = StyleSheet.create({
  lightHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
