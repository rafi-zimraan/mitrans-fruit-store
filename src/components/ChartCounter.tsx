import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector} from '../hooks';
import {RootStackParamList} from '../routes/config';

export default function ChartCounter() {
  const total_item = useAppSelector(state => state.cart.total_item);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.btnChart}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Cart')}>
      <Icon name="cart" color={'orange'} size={35} />
      <View style={styles.cartCounter}>
        <Text style={styles.fontNumber}>{total_item}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnChart: {
    width: 50,
    height: 50,
    backgroundColor: '#F8D898',
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCounter: {
    backgroundColor: 'green',
    minWidth: 20,
    height: 20,
    borderRadius: 20 / 2,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -4,
    right: 0,
  },
  fontNumber: {
    color: 'white',
    fontWeight: '500',
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
