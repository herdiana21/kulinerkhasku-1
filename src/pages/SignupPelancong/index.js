import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import kembali from '../../assets/Icon/Back2.png';
import logo from '../../assets/logo/logo2.png';
import {tinggi} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import InputanWhite from '../../components/inputan-white';
import {lebar} from '../../assets/style/Style';
import {connect, useDispatch, useSelector} from 'react-redux';
import {sendRegister} from '../../redux/action';

const Form = () => {
  const [inputan, setInputan] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const spState = useSelector(state => state.pengunjungReducer);

  const onInputChance = (value, tipe) => {
    setInputan({
      ...inputan,
      [tipe]: value,
    });
  };
  return (
    <View style={{alignItems: 'center'}}>
      <InputanWhite
        plcholder="Nama Lengkap"
        clr="#33907C"
        wid={lebar / 1.2}
        mrginBot={15}
        value={inputan.name}
        onChangeText={value => onInputChance(value, 'name')}
      />
      <InputanWhite
        plcholder="Email"
        clr="#33907C"
        wid={lebar / 1.2}
        mrginBot={15}
        value={spState.email}
        onChangeText={value => onInputChance(value, 'email')}
      />
      <InputanWhite
        plcholder="No Handphone"
        clr="#33907C"
        wid={lebar / 1.2}
        mrginBot={15}
        value={spState.phone}
        onChangeText={value => onInputChance(value, 'phone')}
      />
      <InputanWhite
        plcholder="Password"
        clr="#33907C"
        wid={lebar / 1.2}
        mrginBot={15}
        pass={true}
        value={spState.password}
        onChangeText={value => onInputChance(value, 'password')}
      />
      <InputanWhite
        plcholder="Ulangi Password"
        clr="#33907C"
        wid={lebar / 1.2}
        mrginBot={35}
        pass={true}
      />
      <ButtonGreen
        judul="Daftar"
        p={48}
        l={lebar / 1.2}
        onPress={() => sendRegister()}
      />
    </View>
  );
};

const SignupPelancong = ({navigation}) => {
  const back = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity onPress={back}>
        <View style={{paddingHorizontal: 19, paddingVertical: 15}}>
          <Image source={kembali} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>
      <Image
        source={logo}
        style={{
          height: 70,
          width: 70,
          alignSelf: 'center',
          marginTop: tinggi / 17,
          marginBottom: 13,
        }}
      />
      <Text style={[styles.text1]}>Daftar Pengunjung</Text>
      <Text style={[styles.text2, {marginBottom: 25}]}>Buat Akun</Text>
      <Form />
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
    </SafeAreaView>
  );
};

export default SignupPelancong;

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
