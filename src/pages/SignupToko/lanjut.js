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
} from 'react-native';
import React, {useState} from 'react';
import kembali from '../../assets/Icon/Back2.png';
import {tinggi, lebar} from '../../assets/style/Style';
import camera from '../../assets/Icon/Vector.png';
import maps from '../../assets/image/bg-map.png';
import nav from '../../assets/Icon/Icon.png';
import ButtonGreen from '../../components/button-green';
import close from '../../assets/Icon/Close.png';
import carii from '../../assets/Icon/carii.png';

const LanjutDaftarToko = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

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
              <TouchableOpacity>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageInput}>
              <TouchableOpacity>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageInput}>
              <TouchableOpacity>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{color: '#33907C'}}>
            Pastikan kamu mengambil foto dari berbagai sudut pandang
          </Text>
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
