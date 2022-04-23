import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import cari from '../assets/Icon/pencarian.png';
import {lebar} from '../assets/style/Style';

const Searching = () => {
  return (
    <View style={styles.container}>
      <Image source={cari} style={{width: 24, height: 24, marginRight: 12}} />
      <TextInput
        placeholder="Cari Makanan"
        placeholderTextColor="#7f7f7f"
        style={styles.inputan}
      />
    </View>
  );
};

export default Searching;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    width: lebar / 1.1,
    alignSelf: 'center',
    height: 40,
  },
  inputan: {
    color: '#4F4F4F',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    width: lebar / 1.4,
  },
});
