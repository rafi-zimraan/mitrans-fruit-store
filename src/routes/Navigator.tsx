import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {Cart, CheckOut, FruitDetail, Home} from '../screens';
import {RootStackParamList} from './config';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'dark',
        statusBarBackgroundColor: 'transparent',
        contentStyle: {
          backgroundColor: 'white',
          paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="FruitDetail" component={FruitDetail} />
      <Stack.Screen name="Checkout" component={CheckOut} />
    </Stack.Navigator>
  );
}
