import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '../../components';
import {useAppDispatch, useAppSelector, useFormatIDR} from '../../hooks';
import {addToCart, removeFromCart} from '../../redux/slices/cartSlice';
import {CartProps} from '../../routes/config';

export default function Cart({navigation}: CartProps) {
  const dispacth = useAppDispatch();
  const {item: cartItem, total_price} = useAppSelector(state => state.cart);

  return (
    <View style={{flex: 1}}>
      <View style={styles.containerNavbar}>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('#0000001a', false)}
          onPress={() => navigation.goBack()}>
          <View style={styles.btnGoBack}>
            <Icon name="chevron-left" color={'black'} size={35} />
          </View>
        </TouchableNativeFeedback>
        <Gap width={5} />
        <Text style={styles.txtHeader}>Your Chart</Text>
      </View>

      <FlatList
        ListEmptyComponent={
          <Text style={styles.textEmpty}>Cart is empty. Go get some!</Text>
        }
        data={cartItem}
        renderItem={({item, index}) => {
          return (
            <Pressable
              key={index}
              style={styles.container}
              onPress={() => navigation.navigate('FruitDetail', item)}>
              <View
                style={{
                  ...styles.viewImageItem,
                  backgroundColor: item.color,
                }}>
                <Image
                  source={item.image}
                  style={styles.img}
                  resizeMethod="resize"
                />
              </View>

              <Gap width={15} />

              <View style={{flex: 1}}>
                <Text style={styles.txtName}>{item.name}</Text>
                <Text style={styles.txtPrice}>
                  {useFormatIDR(item.price_per_unit)}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.btnQty}
                activeOpacity={0.6}
                onPress={() => dispacth(removeFromCart(item))}>
                <Icon
                  name={item.amount > 1 ? 'minus' : 'trash-can'}
                  color={'white'}
                  size={20}
                />
              </TouchableOpacity>
              <Text style={styles.textAmount}>{item.amount}</Text>
              <TouchableOpacity
                style={styles.btnQty}
                activeOpacity={0.6}
                onPress={() => dispacth(addToCart(item))}>
                <Icon name={'plus'} color={'white'} size={20} />
              </TouchableOpacity>
            </Pressable>
          );
        }}
      />

      <View style={styles.viewCheckOut}>
        <Text style={styles.textTotalPrice}>
          <Text style={styles.txtPriceP}>Total Price:</Text>
          {useFormatIDR(total_price)}
        </Text>
        <TouchableNativeFeedback useForeground>
          <View style={styles.btnCheckOut}>
            <Text style={styles.btnTextCheckOut}>CheckOut</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtPriceP: {
    fontWeight: 'normal',
    color: 'black',
    fontSize: 14,
  },
  btnTextCheckOut: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  btnCheckOut: {
    borderRadius: 50 / 2,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 15,
    borderWidth: 0.3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  textTotalPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'right',
  },
  viewCheckOut: {
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    elevation: 30,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textAmount: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 10,
  },
  btnQty: {
    backgroundColor: '#ffc14d',
    padding: 5,
    borderRadius: 10,
  },
  txtPrice: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
  txtName: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  img: {
    height: '90%',
    width: '90%',
  },
  viewImageItem: {
    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 10,
  },
  textEmpty: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  containerNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 5,
  },
  txtHeader: {
    color: 'black',
    fontSize: 23,
    fontWeight: '700',
  },
  btnGoBack: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45 / 2,
    overflow: 'hidden',
  },
});
