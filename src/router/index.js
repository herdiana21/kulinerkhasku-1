import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeDashboard,
  Login,
  Onboarding,
  SignupPelancong,
  SignupToko,
  Splash,
  Verify,
} from '../pages';
import AddProduct from '../pages/AddProduct';
import Artikel from '../pages/Artikel';
import DetailProduk from '../pages/DetailProduk';
import HasilPencarian from '../pages/HasilPencarian';
import Produk from '../pages/ListProduct';
import ListProductByToko from '../pages/ListProductByToko';
import OrderHistory from '../pages/OrderHistory';
import LanjutDaftarToko from '../pages/SignupToko/lanjut';
import PopUp from '../components/popUp';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={PopUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPelancong"
        component={SignupPelancong}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupToko"
        component={SignupToko}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Produk"
        component={Produk}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HasilPencarian"
        component={HasilPencarian}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Artikel"
        component={Artikel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProductByToko"
        component={ListProductByToko}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LanjutDaftarToko"
        component={LanjutDaftarToko}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
