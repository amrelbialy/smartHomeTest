import React, { useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
} from 'react-native';

//  import BluetoothSerial from 'react-native-bluetooth-serial';



export default function Bluetooth({ ...props }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [discovering, setDescovering] = useState(false);
  const [devices, setDevices] = useState([]);
  const [unpairedDevices, setUnPairedDevices] = useState([]);
  const [connected, setConnected] = useState(false);

  // useEffect(() => {
  //   Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
  //     (values) => {
  //       const [isEnabled, devices] = values;

  //       this.setState({ isEnabled, devices });
  //     }
  //   );

  //   BluetoothSerial.on('bluetoothEnabled', () => {
  //     Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
  //       (values) => {
  //         const [isEnabled, devices] = values;
  //         this.setState({ devices });
  //       }
  //     );

  //     BluetoothSerial.on('bluetoothDisabled', () => {
  //       this.setState({ devices: [] });
  //     });
  //     BluetoothSerial.on('error', (err) =>
  //       console.log(`Error: ${err.message}`)
  //     );
  //   });
  // }, []);

  // const renderItem = (item) => {
  //   return (
  //     <View style={styles.deviceNameWrap}>
  //       <Text style={styles.deviceName}>{item.item.name}</Text>
  //     </View>
  //   );
  // };

  // const enable = () => {
  //   BluetoothSerial.enable()
  //     .then((res) => this.setState({ isEnabled: true }))
  //     .catch((err) => console.log(err.message));
  // };

  // const disable = () => {
  //   BluetoothSerial.disable()
  //     .then((res) => this.setState({ isEnabled: false }))
  //     .catch((err) => console.log(err.message));
  // };

  const toggleBluetooth = (value) => {
    if (value === true) {
      this.enable();
    } else {
      this.disable();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>Bluetooth Device List</Text>
        </View>
    
    </View>
  );
}


//  <View style={styles.toolbar}>
//         <Text style={styles.toolbarTitle}>Bluetooth Device List</Text>

//         <View style={styles.toolbarButton}>
//           <Switch
//             value={this.state.isEnabled}
//             onValueChange={(val) => this.toggleBluetooth(val)}
//           />
//         </View>
//       </View>
//       <FlatList
//         style={{ flex: 1 }}
//         data={this.state.devices}
//         keyExtractor={(item) => item.id}
//         renderItem={(item) => this._renderItem(item)}
//       />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    marginTop: 8,
  },
  toolbarTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    marginTop: 6,
  },
  deviceName: {
    fontSize: 17,
    color: 'black',
  },
  deviceNameWrap: {
    margin: 10,
    borderBottomWidth: 1,
  },
});
