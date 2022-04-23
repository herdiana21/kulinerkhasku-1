import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import kembali from '../../assets/Icon/Back2.png';
import {tinggi, lebar} from '../../assets/style/Style';
import logo from '../../assets/logo/logo2.png';
import InputanWhite from '../../components/inputan-white';
import ButtonGreen from '../../components/button-green';

const SignupToko = ({navigation}) => {
  const Form = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <InputanWhite
          plcholder="Nama Lengkap"
          clr="#33907C"
          wid={lebar / 1.2}
          mrginBot={10}
        />
        <InputanWhite
          plcholder="Nama Toko"
          clr="#33907C"
          wid={lebar / 1.2}
          mrginBot={10}
        />
        <InputanWhite
          plcholder="Email ID/No Handphone"
          clr="#33907C"
          wid={lebar / 1.2}
          mrginBot={10}
        />
        <InputanWhite
          plcholder="Password"
          clr="#33907C"
          wid={lebar / 1.2}
          mrginBot={10}
          pass={true}
        />
        <InputanWhite
          plcholder="Ulangi Password"
          clr="#33907C"
          wid={lebar / 1.2}
          mrginBot={20}
          pass={true}
        />
        <ButtonGreen
          judul="Lanjut"
          l={lebar / 1.2}
          p={tinggi / 16}
          link={() => {
            navigation.navigate('LanjutDaftarToko');
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={{paddingHorizontal: 19, paddingVertical: 10}}>
          <Image source={kembali} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>
      <Image
        source={logo}
        style={{
          height: 70,
          width: 70,
          alignSelf: 'center',
          marginTop: tinggi / 20,
          marginBottom: 13,
        }}
      />
      <Text style={[styles.text1]}>Daftar Toko</Text>
      <Text style={[styles.text2, {marginBottom: 25}]}>Buat Akun</Text>
      <Form />
      <View style={{paddingHorizontal: 30, marginTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={[styles.text2, {marginTop: 45.5}]}>
            Sudah punya akun ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.textNav}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupToko;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'Monteserrat-SemiBold',
    fontSize: 24,
    color: '#33907C',
    textAlign: 'center',
  },
  text2: {
    color: '#33907C',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  textNav: {
    color: '#33907C',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginTop: 45.5,
  },
});
