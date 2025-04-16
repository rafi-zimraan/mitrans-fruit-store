import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ChartCounter, Gap} from '../../components';
import {FruitDetailProps} from '../../routes/config';

export default function FruitDetail({navigation, route}: FruitDetailProps) {
  const fruit = route.params;
  console.log('ini detail fruit', fruit);
  return (
    <View style={{flex: 1}}>
      <Image source={fruit.image} style={styles.img} />
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color={'black'} size={35} />
        </TouchableOpacity>
        <ChartCounter />
      </View>
      <Gap height={320} />
      <View style={styles.content}>
        <Text style={styles.textFruitName}>{fruit.name}</Text>
        <View style={styles.btnRanting}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" color={'gold'} size={25} />
            <Icon name="star" color={'gold'} size={25} />
            <Icon name="star" color={'gold'} size={25} />
            <Icon name="star-half-full" color={'gold'} size={25} />
            <Icon name="star-outline" color={'gold'} size={25} />
          </View>
          <Text style={styles.textStock}>Stok: 20</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnRanting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textStock: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '500',
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    elevation: 10,
  },
  textFruitName: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  img: {
    height: 359,
    position: 'absolute',
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 10,
  },
  btnBack: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
