import React, {useEffect} from 'react';

import {
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

import Axios from 'axios';
import AppConfig from './constant/App';
// import {  } from "ax";

const TabScanner = props => {
  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      resizeMode={'stretch'}
      style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={{width: '100%', height: 120, marginTop: 25, padding: 0}}
        source={require('./assets/img/LCB1.png')}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          marginBottom: 16,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={() => onClickScan(props)}>
        <Image
          source={require('./assets/img/scan_button.png')}
          style={{width: 250, height: 250}}
        />
      </TouchableOpacity>
      <Text
        style={{
          // flex: 1,
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        Develop By NaviWorld Thailand Co., Ltd.
      </Text>
    </ImageBackground>
  );
};

const onResult = async result => {
  await Axios.get(
    AppConfig.webServiceUrl +
      'qrcode/SendOutputQRCode/get?qrcodeP=' +
      result +
      '&usernameP=dev&passwordP=Q1w2e3r4',
  )
    .then(response => {
      alert(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    });
};

const onClickScan = ({navigation}) => {
  navigation.navigate('scanScreen', {onResult});
};

export default TabScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonTouchable: {
    flex: 1,
    height: 100,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
