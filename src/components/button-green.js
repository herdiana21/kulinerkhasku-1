import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {tinggi, lebar} from '../assets/style/Style';

const ButtonGreen = ({link, p, l, judul, ...rest}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={link} {...rest}>
        <View style={[styles.button, {height: p, width: l}]}>
          <Text style={styles.tex}>{judul}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ButtonGreen;

const styles = StyleSheet.create({
  tex: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#33907C',
  },
});
