import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ChartCounter() {
  return (
    <TouchableOpacity style={styles.btnChart} activeOpacity={0.5}>
      <Icon name="cart" color={'orange'} size={35} />
      <View style={styles.cartCounter}>
        <Text style={styles.fontNumber}>0</Text>
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
    width: 20,
    borderRadius: 20 / 2,
    paddingHorizontal: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  fontNumber: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    alignSelf: 'center',
  },
});
