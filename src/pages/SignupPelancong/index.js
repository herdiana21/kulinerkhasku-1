import React, {useEffect, useState} from 'react';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/core';
import {ScrollView} from 'react-native-gesture-handler';
import {YandexMapKit, YandexMapView} from 'react-native-yandexmapkit';

import {connect, useDispatch, useSelector} from 'react-redux';

import {Formik} from 'formik';
import * as Yup from 'yup';

import kembali from '../../assets/Icon/Back2.png';
import logo from '../../assets/logo/logo2.png';
import {lebar, tinggi} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import InputanWhite from '../../components/inputan-white';
import {signUpUser} from '../../redux/actions';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  email: Yup.string()
    .email('Masukkan email dengan benar')
    .required('Email tidak boleh kosong!'),
  phone: Yup.string().required('No.Telepon tidak boleh kosong!'),
  password: Yup.string()
    .trim()
    .min(6, 'Minimal harus 6 digit')
    .required('Password tidak boleh kosong!'),
  repasword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password tidak cocok',
  ),
});

const Form = () => {
  const inputan = {
    name: '',
    email: '',
    phone: '',
    password: '',
    repasword: '',
  };
  const dispatch = useDispatch();

  const statusRegister = useSelector(state => state.userReducer);
  const nav = useNavigation();
  useEffect(() => {
    if (statusRegister.registerUserData.status) {
      dispatch({
        type: 'SUCCESS_REGISTER_USER',
        payload: {status: false, message: '', data: []},
      });
      nav.navigate('Login');
    }
  }, []);
  const onSubmit = (name, email, phone, password) => {
    dispatch(
      signUpUser({
        name: name,
        email: email,
        phone: phone,
        password: password,
      }),
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Formik
        initialValues={inputan}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          setTimeout(() => {
            formikAction.resetForm();
            formikAction.setSubmitting(false);
            onSubmit(values.name, values.email, values.phone, values.password);
          }, 2000);
        }}>
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const {name, email, phone, password, repasword} = values;
          return (
            <>
              <InputanWhite
                onBlur={handleBlur('name')}
                error={touched.name && errors.name}
                plcholder="Nama Lengkap"
                clr="#33907C"
                wid={lebar / 1.2}
                mrginBot={15}
                value={name}
                onChangeText={handleChange('name')}
              />
              <InputanWhite
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
                value={email}
                plcholder="Email"
                clr="#33907C"
                wid={lebar / 1.2}
                mrginBot={15}
                onChangeText={handleChange('email')}
              />
              <InputanWhite
                onBlur={handleBlur('phone')}
                error={touched.phone && errors.phone}
                value={phone}
                plcholder="No Handphone"
                clr="#33907C"
                wid={lebar / 1.2}
                mrginBot={15}
                onChangeText={handleChange('phone')}
              />
              <InputanWhite
                onBlur={handleBlur('password')}
                error={touched.password && errors.password}
                value={password}
                plcholder="Password"
                clr="#33907C"
                wid={lebar / 1.2}
                mrginBot={15}
                pass={true}
                onChangeText={handleChange('password')}
              />
              <InputanWhite
                onBlur={handleBlur('repasword')}
                error={touched.repasword && errors.repasword}
                value={repasword}
                plcholder="Ulangi Password"
                clr="#33907C"
                wid={lebar / 1.2}
                mrginBot={35}
                pass={true}
                onChangeText={handleChange('repasword')}
              />

              <ButtonGreen
                judul="Daftar"
                p={48}
                l={lebar / 1.2}
                submitting={isSubmitting}
                onPress={() => handleSubmit()}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const SignupPelancong = ({navigation}) => {
  const back = () => {
    navigation.goBack();
  };
  const [latitude, setLat] = useState(0);
  const [longitude, setLong] = useState(0);
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLat(info.coords.latitude);
      setLong(info.coords.longitude);
    });
  }, [latitude, longitude]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity onPress={back}>
        <View style={{paddingHorizontal: 19, paddingVertical: 15}}>
          <Image source={kembali} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>
      <ScrollView>
        {/* <Image
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
        <Text style={[styles.text2, {marginBottom: 25}]}>Buat Akun</Text> */}
        {/* <Form /> */}
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* <Text style={[styles.text2, {marginTop: 45.5}]}>
            Sudah punya akun ?
          </Text> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.textNav}> Login</Text>
          </TouchableOpacity>
          {/* <MapView
            style={{flex: 1, width: window.width, height: 400}} //window pake Dimensions
            initialRegion={{
              latitude: -6.891156,
              longitude: 107.570605,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{latitude: -6.891156, longitude: 107.570605}}
              title="Lokasi"
            />
            <Marker
              coordinate={{latitude: -6.8904, longitude: 107.565273}}
              title="Lokasi"
            /> */}
          {/* <Polygon
              coordinates={[
                {latitude: -6.891156, longitude: 107.570605},
                {latitude: -6.8904, longitude: 107.565273},
              ]}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeWidth={6}
            /> */}
          {/* <MapViewDirections
              origin={{latitude: -6.891156, longitude: 107.570605}}
              destination={{latitude: -6.8904, longitude: 107.565273}}
              apikey={'AIzaSyC1_89URWfL54ghbs2sdlZOdQWrjX9hK0Q'}
              strokeWidth={3}
              strokeColor="hotpink"
            />
          </MapView> */}
        </View>
      </ScrollView>
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
