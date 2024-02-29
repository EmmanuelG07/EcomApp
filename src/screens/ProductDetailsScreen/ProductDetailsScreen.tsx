import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CartIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {Rating} from 'react-native-ratings';

import {MainStackList} from '../../navigation/types';
import {styles} from './styles';
import {I_ThemeProps} from '../../config/theme';
import {getProductById} from '../../api/getProductById';
import {useDispatch} from 'react-redux';
import {setMessageData} from '../../redux/message/messageSlice';

type NavigationProps = NativeStackNavigationProp<MainStackList, 'HomeScreen'>;

type RouteProps = RouteProp<MainStackList, 'ProductDetialsScreen'>;

type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: [];
  price: number;
  rating: number;
  stock: number;
  title: string;
};

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ProductDetailsScreen = () => {
  const {colors} = useTheme() as I_ThemeProps;
  const currentStyles = styles(colors);
  const route = useRoute<RouteProps>();
  const {productId} = route.params;
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState<ProductType>();
  const dispatch = useDispatch();

  const handleSuccessAndError = (
    messageTypes: 'success' | 'error',
    messageString: string,
  ) => {
    dispatch(
      setMessageData({messageType: messageTypes, message: messageString}),
    );
  };
  const getProductByIdMethod = () => {
    setIsLoading(true);
    try {
      getProductById(productId)
        .then(res => {
          setProductData(res);
          handleSuccessAndError('success', 'Data Fetched Successfully');
          setIsLoading(false);
        })
        .catch(error => {
          handleSuccessAndError('error', 'Some thing went wrong');
        });
    } catch (error) {
      console.log(error);
      handleSuccessAndError('error', 'Some thing went wrong');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = getProductByIdMethod();
    return unsubscribe;
  }, []);

  return (
    <View style={currentStyles.mainContainer}>
      <View style={currentStyles.headerContainer}>
        <TouchableOpacity
          style={currentStyles.arrowStyle}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={25} color={colors.darkOrchid} />
        </TouchableOpacity>

        <Text style={currentStyles.headerText}>Product</Text>
      </View>

      <ScrollView>
        {!isLoading ? (
          productData && productData.images && productData.images.length > 0 ? (
            <View style={currentStyles.subContainer}>
              <FlatList
                data={productData?.images}
                renderItem={({item}) => {
                  return (
                    <View style={currentStyles.imageContainer}>
                      <Image
                        source={{uri: item}}
                        style={currentStyles.imageStyle}
                      />
                    </View>
                  );
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              <View style={currentStyles.infoView}>
                <Text style={currentStyles.titleText}>
                  {productData?.title}
                </Text>
                <View style={currentStyles.rateView}>
                  <Text style={currentStyles.commontext}>Rating : </Text>
                  <Rating
                    ratingCount={5}
                    style={{alignItems: 'flex-start'}}
                    readonly
                    showReadOnlyText={false}
                    startingValue={productData?.rating}
                    imageSize={20}
                    fractions={1}
                    jumpValue={0.1}
                  />
                </View>
                <Text style={currentStyles.commontext}>
                  Available Stock : {productData?.stock}
                </Text>
                <Text style={currentStyles.commontext}>
                  {productData?.description}
                </Text>
                <View style={currentStyles.priceView}>
                  <Text style={currentStyles.priceText}>
                    ${productData?.price}
                  </Text>
                  <TouchableOpacity style={currentStyles.buttonMain}>
                    <CartIcons
                      name="cart-arrow-down"
                      size={25}
                      color={colors.pureWhite}
                    />
                    <Text style={currentStyles.addCarttext}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={currentStyles.noDataFoundView}>
              <Text style={currentStyles.noDataText}>No Data Found !</Text>
            </View>
          )
        ) : (
          <View>
            <ShimmerPlaceholder
              style={currentStyles.shimmerImage}></ShimmerPlaceholder>
            <ShimmerPlaceholder
              style={currentStyles.shimmerTitle}></ShimmerPlaceholder>
            <ShimmerPlaceholder
              style={currentStyles.shimmerRating}></ShimmerPlaceholder>
            <ShimmerPlaceholder
              style={currentStyles.shimmerStock}></ShimmerPlaceholder>
            <ShimmerPlaceholder
              style={currentStyles.shimmerDescrip}></ShimmerPlaceholder>
            <ShimmerPlaceholder
              style={currentStyles.shimmerPrice}></ShimmerPlaceholder>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
