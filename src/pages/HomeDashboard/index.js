import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {lebar} from '../../assets/style/Style';
import notif from '../../assets/Icon/Notification.png';
import Searching from '../../components/machine-search';
import CR from '../../components/carousel';
import CardProduct from '../../components/card-product';
import gbr1 from '../../assets/image/cilok.jpg';
import ButtonGreen from '../../components/button-green';
import map from './../../assets/Icon/Maps.png';
import ButtonWhite from '../../components/button-white';
import ArtikelList from '../../components/card-list-artikel';
import IconNav from '../../components/icon-navbar';

const HomeDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
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
            height: '23%',
            width: '95%',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: '33907C',
            alignSelf: 'center',
            marginTop: 11,
            alignItems: 'center',
            paddingHorizontal: 12,
            flexDirection: 'row',
          }}>
          <View style={{marginRight: 8}}>
            <Image source={map} style={{height: 20, width: 20}} />
          </View>
          <View>
            <Text style={{fontSize: 10, color: '#ccc'}}>
              Lokasi anda sekarang
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{color: 'white'}}>
              Jl. Dakota No. 8a Sukaraja Bandung, Jawa Barat, Indonesia
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.konten}>
        <CR />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontSize: 18, color: '#4F4F4F'}}>Produk Baru</Text>
            <ButtonGreen l={120} p={30} judul="Lihat Semua" />
          </View>
          <View style={{paddingHorizontal: 10}}>
            <ScrollView
              horizontal
              style={{
                backgroundColor: 'white',
                maxWidth: lebar,
                height: 220,
              }}
              showsHorizontalScrollIndicator={false}>
              <CardProduct
                produkNama="Cilok"
                produkHarga="Rp 12.000"
                img={gbr1}
              />
              <CardProduct
                produkNama="Cilok"
                produkHarga="Rp 12.000"
                img={gbr1}
              />
              <CardProduct
                produkNama="Cilok"
                produkHarga="Rp 12.000"
                img={gbr1}
              />
              <CardProduct
                produkNama="Cilok"
                produkHarga="Rp 12.000"
                img={gbr1}
              />
              <CardProduct
                produkNama="Cilok"
                produkHarga="Rp 12.000"
                img={gbr1}
              />
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Text style={{fontSize: 18, color: '#4F4F4F'}}>
            Rekomendasi Produk
          </Text>
          <ButtonGreen l={120} p={30} judul="Lihat Semua" />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <ScrollView
            horizontal
            style={{
              backgroundColor: 'white',
              maxWidth: lebar,
              height: 220,
            }}
            showsHorizontalScrollIndicator={false}>
            <CardProduct
              produkNama="Cilok"
              produkHarga="Rp 12.000"
              img={gbr1}
            />
            <CardProduct
              produkNama="Cilok"
              produkHarga="Rp 12.000"
              img={gbr1}
            />
            <CardProduct
              produkNama="Cilok"
              produkHarga="Rp 12.000"
              img={gbr1}
            />
            <CardProduct
              produkNama="Cilok"
              produkHarga="Rp 12.000"
              img={gbr1}
            />
            <CardProduct
              produkNama="Cilok"
              produkHarga="Rp 12.000"
              img={gbr1}
            />
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: '#33907C',
            height: 250,
            padding: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Artikel Baru
            </Text>
            <ButtonWhite l={120} p={30} judul="Lihat Semua" />
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            style={{
              flex: 1,
              marginTop: 10,
            }}>
            <ArtikelList />
            <ArtikelList />
            <ArtikelList />
            <ArtikelList />
            <ArtikelList />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.navBottom}>
        <IconNav
          url={require('../../assets/Icon/home-active.png')}
          teks="Home"
          warna={'#33907C'}
          linkk={() => alert('Home')}
        />
        <IconNav
          url={require('../../assets/Icon/search.png')}
          teks="Jelajahi"
          warna={'#4f4f4f'}
          linkk={() => alert('Jelajahi')}
        />
        <IconNav
          url={require('../../assets/Icon/store.png')}
          teks="Store"
          warna={'#4f4f4f'}
          linkk={() => alert('Jelajahi')}
        />
        <IconNav
          url={require('../../assets/Icon/order.png')}
          teks="History"
          warna={'#4f4f4f'}
          linkk={() => alert('History')}
        />
        <IconNav
          url={require('../../assets/Icon/profile.png')}
          teks="Profil"
          warna={'#4f4f4f'}
          linkk={() => alert('Profile')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeDashboard;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  header: {
    backgroundColor: '#33907C',
    width: lebar,
    height: 170,
    flexDirection: 'column',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 29,
    paddingVertical: 20,
  },
  konten: {backgroundColor: '#FFFFFF', flex: 1},
  navBottom: {
    backgroundColor: '#eee',
    width: lebar,
    height: 55,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
  judul: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  containerCard: {marginHorizontal: 5},
});
