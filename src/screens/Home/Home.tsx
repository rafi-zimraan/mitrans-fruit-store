import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ICON_LOGO} from '../../assets';
import {ChartCounter, Gap} from '../../components';
import {FruitData} from '../../constant';
import {useAppDispatch, useFormatIDR} from '../../hooks';
import {addToCart} from '../../redux/slices/cartSlice';
import {HomeProps} from '../../routes/config';

export default function Home({navigation, route}: HomeProps) {
  const dispacth = useAppDispatch();
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const filters: Array<string> = [
    'All',
    'Apples',
    'Mangoes',
    'Grapes',
    'Oranges',
    'Berries',
  ];

  const data =
    FruitData.filter(data => data.category == filters[selectedFilter])[0]
      ?.types || FruitData.flatMap(category => category.types);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Gap height={10} />

      <View style={styles.headerContainer}>
        <View style={styles.contentNavbar}>
          <Image source={ICON_LOGO} style={styles.Img} resizeMethod="resize" />
          <ChartCounter />
        </View>

        <Gap height={10} />

        <Text style={styles.txtLabel}>Seasonal</Text>
        <Text style={styles.textHeader}>Fresh Fruit from the Root</Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        columnWrapperStyle={{justifyContent: 'center'}}
        ListFooterComponent={
          selectedFilter == 0 ? (
            <View style={styles.containerFooter}>
              <View style={styles.line} />
              <Image
                source={require('../../assets/png/basket.png')}
                style={styles.imgFooter}
              />
              <View style={styles.line} />
            </View>
          ) : null
        }
        ListHeaderComponent={
          <View>
            <ScrollView
              contentContainerStyle={{paddingHorizontal: 20}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {filters.map((filter, index) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setSelectedFilter(index)}
                  style={{
                    ...styles.btnFilter,
                    backgroundColor:
                      selectedFilter == index ? '#ffbb3d' : '#ffe4b3',
                  }}>
                  <Text style={styles.textMenu}>{filter}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <TouchableNativeFeedback
              key={index}
              useForeground
              onPress={() => navigation.navigate('FruitDetail', item)}>
              <View
                style={{
                  ...styles.btnContainerFruit,
                  backgroundColor: item.color,
                }}>
                <TouchableOpacity
                  style={styles.btnAddChart}
                  onPress={() => dispacth(addToCart(item))}>
                  <Icon name="cart-plus" color={'white'} size={30} />
                </TouchableOpacity>
                <Gap flex={1} />

                <View style={styles.containerImageFruit}>
                  <Image
                    source={item.image}
                    style={styles.imgFruit}
                    resizeMethod="resize"
                  />
                </View>

                <View style={{margin: 15}}>
                  <Text style={styles.txtFruitName}>{item.name}</Text>
                  <Text style={styles.txtPrice}>
                    {useFormatIDR(item.price_per_unit)}
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerFooter: {
    opacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 0,
  },
  line: {
    backgroundColor: 'black',
    width: 100,
    height: 1,
    marginHorizontal: 20,
  },
  imgFooter: {
    width: 50,
    height: 50,
  },
  containerImageFruit: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgFruit: {
    height: 100,
    width: 100,
  },
  btnAddChart: {
    backgroundColor: '#ffffff40',
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 10,
  },
  btnContainerFruit: {
    width: '45%',
    height: 200,
    margin: 10,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 15,
  },
  txtFruitName: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  txtPrice: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  btnFilter: {
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    paddingHorizontal: 20,
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  textMenu: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
  },
  textHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  txtLabel: {
    color: 'black',
    fontSize: 17,
  },
  contentNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerContainer: {
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: 'white',
    elevation: 10,
  },

  Img: {
    height: 50,
    width: 50,
  },
});
