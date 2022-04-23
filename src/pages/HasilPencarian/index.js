import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import notif from '../../assets/Icon/Notification.png';
import Searching from '../../components/machine-search';
import gbr1 from '../../assets/image/cilok.jpg';
import CardProduct from '../../components/card-product';
import map from '../../assets/Icon/Maps.png';
import kembali from '../../assets/Icon/Back.png';

const HasilPencarian = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <TouchableOpacity style={{backgroundColor: '#33907C'}}>
        <View style={{paddingHorizontal: 19, paddingVertical: 5}}>
          <Image source={kembali} style={{height: 24, width: 24}} />
        </View>
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.judul}>#KulinerKhasKu</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={notif} style={{width: 24, height: 24}} />
          </View>
        </View>
        <Searching />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 20,
          }}>
          <View style={styles.button}>
            <Image
              source={map}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text>Lokasi</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.konten}>
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HasilPencarian;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#33907C',
    width: '100%',
    height: 170,
    flexDirection: 'column',
  },
  konten: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  navBottom: {
    backgroundColor: '#eee',
    width: '100%',
    height: 55,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 29,
    paddingVertical: 20,
  },
  judul: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    height: 35,
    width: '30%',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
