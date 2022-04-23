import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import cilok from '../../assets/image/cilok.jpg';
import ButtonGreen from '../../components/button-green';
import kembali from '../../assets/Icon/Back.png';

const DetailProduk = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View
        style={{
          backgroundColor: '#00000050',
          width: '100%',
          height: '6%',
          position: 'absolute',
          zIndex: 2,
        }}>
        <TouchableOpacity>
          <View>
            <Image source={kembali} style={{height: 35, width: 35}} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{height: 225, width: '100%'}}>
          <ImageBackground
            source={cilok}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View style={styles.containerProduk}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Cilok
          </Text>
          <Text style={{color: '#33907C', fontSize: 18, fontWeight: 'bold'}}>
            Rp 12.000,-
          </Text>
        </View>
        <View style={styles.containerToko}>
          <Text style={{color: 'black', fontSize: 18}}>TokoKhasku</Text>
          <ButtonGreen p={30} l={110} judul="Kunjungi" />
        </View>
        <View style={styles.containerDeskripsi}>
          <Text style={styles.txtDesk}>Deskripsi Produk</Text>
          <Text style={{color: 'black'}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.txtDesk}>Informasi Produk</Text>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text
              style={[
                styles.teks,
                {
                  marginRight: 80,
                },
              ]}>
              Berat{' '}
            </Text>
            <Text style={styles.teks}>: 200 gram</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={[styles.teks, {marginRight: 56}]}>Kategori </Text>
            <Text style={styles.teks}>: Makanan Ringan</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={[styles.teks, {marginRight: 20}]}>Bahan Utama </Text>
            <Text style={styles.teks}>: Tepung Jagung</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  containerProduk: {
    height: 95,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 8,
    justifyContent: 'center',
  },
  containerToko: {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDeskripsi: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 26,
  },
  txtDesk: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  containerInfo: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
  },
  teks: {
    color: 'black',
    marginBottom: 5,
    fontSize: 16,
  },
  backk: {
    borderRadius: 50,
    backgroundColor: '#ccc',
    height: 37,
    width: 37,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '3%',
    top: '3%',
  },
});
