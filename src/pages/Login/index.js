import {
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../../assets/logo/logo2.png';
import {tinggi, lebar} from '../../assets/style/Style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react/cjs/react.development';
import Button from '../../components/button-light-semibold';
import InputanWhite from '../../components/inputan-white';
import {useSelector} from 'react-redux';

const Form = () => {
  return (
    <View style={{width: lebar / 1.2}}>
      <InputanWhite
        pass={false}
        clr="#33907C"
        plcholder="Email ID/ No Handphone"
        mrginBot={10}
      />
      <InputanWhite
        pass={true}
        clr="#33907C"
        plcholder="Password"
        mrginBot={30}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          alert('Hello');
        }}>
        <View
          style={{
            height: tinggi / 16,
            backgroundColor: 'white',
            justifyContent: 'center',
            borderRadius: 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}>
          <Text style={{color: '#33907C', textAlign: 'center'}}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const Login = ({navigation}) => {
  let [show, setShow] = useState(false);
  const loginState = useSelector(state => state.LoginReducer);

  // useEffect(() => {
  //   console.log(loginState);
  // }, [loginState]);

  const Popup = () => {
    return (
      <SafeAreaView>
        <Modal visible={show} animationType="slide" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableHighlight
              underlayColor="#ddd"
              onPress={() => setShow(!show)}>
              <View
                style={{
                  height: tinggi / 25,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {height: 15, width: 0},
                  shadowOpacity: 5,
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#ddd',
                    width: lebar / 2,
                    height: 5,
                    borderRadius: 50,
                  }}></View>
              </View>
            </TouchableHighlight>
            <View
              style={{
                height: tinggi / 5.3,
                backgroundColor: '#33907C',
                justifyContent: 'space-around',
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <Button
                teks="Pengunjung"
                link={() => {
                  navigation.navigate('SignupPelancong');
                  setShow(false);
                }}
              />
              <Button
                teks="Toko"
                link={() => {
                  navigation.navigate('SignupToko');
                  setShow(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.text1}>#KulinerKhasKu</Text>
        <Text style={[styles.text2, {marginBottom: 45}]}>
          Ayo login dengan akun mu
        </Text>
        <Form />
        <TouchableOpacity>
          <Text style={[styles.text2, {marginTop: 32.5}]}>Lupa password ?</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text2, {marginTop: 45.5}]}>
            Belum punya akun?{' '}
          </Text>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Text
              style={{
                color: '#33907C',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 16,
                marginTop: 45.5,
              }}>
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
        <Popup />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: tinggi / 15,
  },
  text1: {
    fontSize: 24,
    color: '#33907C',
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 66,
  },
  text2: {
    fontSize: 16,
    color: '#33907C',
    fontFamily: 'Montserrat-Regular',
  },
  inputEmail: {
    borderColor: '#33907C',
    borderWidth: 1,
    borderRadius: 100,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 20,
    fontSize: 18,
    marginBottom: 16,
    maxWidth: lebar / 1.2,
    width: lebar / 1.2,
    color: '#33907C',
  },
  image: {
    width: 90,
    height: 85,
    marginBottom: 10,
  },
  button: {
    maxHeight: tinggi / 6,
    height: tinggi / 16,
    maxWidth: lebar / 1.2,
    width: lebar / 1.2,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
