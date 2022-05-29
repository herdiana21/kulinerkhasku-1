import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
  Modal,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import kembali from '../../assets/Icon/Back2.png';
import {tinggi, lebar} from '../../assets/style/Style';
import camera from '../../assets/Icon/Vector.png';
import maps from '../../assets/image/bg-map.png';
import nav from '../../assets/Icon/Icon.png';
import ButtonGreen from '../../components/button-green';
import close from '../../assets/Icon/Close.png';
import carii from '../../assets/Icon/carii.png';
import Button from '../../components/button-light-semibold';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';

const LanjutDaftarToko = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const bukaKamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(option, respon => {
      if (respon.didCancel) {
        console.log('Kamera dibatalkan');
      } else if (respon.errorCode) {
        console.log(respon.errorMessage);
      } else {
        const data = respon.assets;
        console.log(data);
      }
    });
  };

  const bukaGaleri = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, respon => {
      if (respon.didCancel) {
        console.log('Kamera dibatalkan');
      } else if (respon.errorCode) {
        console.log(respon.errorMessage);
      } else {
        const data = respon.assets;
        console.log(data);
      }
    });
  };

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
              <Button teks="Ambil Foto" link={bukaKamera} />
              <Button teks="Buka Berkas" link={bukaGaleri} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
      <ScrollView>
        <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
          <Text style={{color: '#33907C'}}>Upload foto lokasi</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.imageInput}>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                }}>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageInput}>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                }}>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageInput}>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                }}>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{color: '#33907C'}}>
            Pastikan kamu mengambil foto dari berbagai sudut pandang
          </Text>
          {/* <Formik
            initialValues={inputan}
            validationSchema={validationSchema}
            onSubmit={(values, formikAction) => {
              setTimeout(() => {
                formikAction.resetForm();
                formikAction.setSubmitting(false);
                onSubmit(values.alamat, values.deskripsi);
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
              const {alamat, deskripsi} = values;
            }}
            <TextInput
              multiline={true}
              placeholder="Alamat lengkap"
              placeholderTextColor="#33907C"
              style={{
                borderWidth: 1,
                borderRadius: 16,
                borderColor: '#33907C',
                marginTop: 40,
                height: tinggi / 5,
                color: '#33907C',
                padding: 20,
                textAlignVertical: 'top',
              }}
            />
            <TextInput
              multiline={true}
              placeholder="Deskripsi Toko"
              placeholderTextColor="#33907C"
              style={{
                borderWidth: 1,
                borderRadius: 16,
                borderColor: '#33907C',
                marginTop: 40,
                height: tinggi / 5,
                color: '#33907C',
                padding: 20,
                textAlignVertical: 'top',
              }}
            />
          </Formik> */}

          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Jam Buka
          </Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="time"
            androidVariant="nativeAndroid"
            textColor="#33907C"
            locale="id"
          />
          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Jam Tutup
          </Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="time"
            androidVariant="nativeAndroid"
            textColor="#33907C"
            locale="id"
          />
          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Lokasi toko kamu
          </Text>
          <ImageBackground
            source={maps}
            imageStyle={{borderRadius: 10}}
            style={{
              height: 150,
              padding: 30,
              marginBottom: 50,
            }}>
            <Text style={{color: 'black'}}>
              Tandai lokasi kamu dalam peta agar memudahkan layanan navigasi
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderRadius: 7,
                  borderColor: '#33907C',
                  padding: 5,
                  maxWidth: 170,
                  marginTop: 15,
                }}>
                <Image
                  source={nav}
                  style={{height: 20, width: 20, marginRight: 5}}
                />
                <Text style={{color: '#33907C'}}>Tandai alamat kamu</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{alignSelf: 'center'}}>
            <ButtonGreen judul="Daftar" p={40} l={lebar / 1.3} />
          </View>
        </View>
        <Modal
          transparent
          visible={isModalVisible}
          statusBarTranslucent={true}
          animationType="slide">
          <View
            style={{
              flex: 1,
              backgroundColor: '#00000050',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: lebar,
                height: tinggi / 1.03,
                backgroundColor: 'white',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60,
                  position: 'relative',
                }}>
                <Text style={{color: 'black'}}>Lokasi toko kamu</Text>
                <View style={{position: 'absolute', right: 15}}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Image
                      source={close}
                      style={{height: 24, width: 24}}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  padding: 20,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#CBCBCC',
                }}>
                <View
                  style={{
                    backgroundColor: '#F5F2FC',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  }}>
                  <TextInput
                    style={{
                      flex: 1,
                      color: 'black',
                      marginRight: 3,
                    }}
                  />
                  <Image source={carii} style={{height: 30, width: 30}} />
                </View>
                <View
                  style={{
                    backgroundColor: 'pink',
                    height: tinggi / 1.5,
                    marginTop: 10,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'black'}}>INI PETA!!</Text>
                </View>
              </View>
              <View style={{padding: 20}}>
                <ButtonGreen judul="Gunakan lokasi ini" p={40} />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <Popup />
    </SafeAreaView>
  );
};

export default LanjutDaftarToko;

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
  imageInput: {
    width: lebar / 2.5,
    height: tinggi / 5,
    backgroundColor: '#F5F2FC',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#33907C',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {width: 50, height: 50, marginBottom: 15, alignSelf: 'center'},
});
