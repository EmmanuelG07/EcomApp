import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import {I_ThemeProps} from '../../config/theme';
import {styles} from './styles';
import Card from '../../components/Card/Card';
import {getAllProduct} from '../../api/getAllProduct';
import {MainStackList} from '../../navigation/types';
import {setMessageData} from '../../redux/message/messageSlice';

type NavigationProps = NativeStackNavigationProp<MainStackList, 'HomeScreen'>;

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
};

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const HomeScreen = () => {
  const {colors} = useTheme() as I_ThemeProps;
  const currentStyles = styles(colors);
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState<ProductType[]>([]);
  const dispatch = useDispatch();

  const handleSuccessAndError = (
    messageTypes: 'success' | 'error',
    messageString: string,
  ) => {
    dispatch(
      setMessageData({messageType: messageTypes, message: messageString}),
    );
  };

  const getProductMethod = () => {
    setIsLoading(true);
    try {
      getAllProduct()
        .then(res => {
          setProductData(res.products);
          handleSuccessAndError('success', 'Data Fetched Successfully');
          setIsLoading(false);
        })
        .catch(error => {
          handleSuccessAndError('error', 'Something went wrong');
        });
    } catch (error) {
      console.log(error);
      handleSuccessAndError('error', 'Some thing went wrong');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductMethod();
  }, []);

  const handleEmptyList = () => {
    return (
      <View>
        {isLoading ? (
          <View style={currentStyles.flatlistContainer}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={() => {
                return (
                  <ShimmerPlaceholder
                    style={currentStyles.emptyCard}></ShimmerPlaceholder>
                );
              }}
              numColumns={2}
            />
          </View>
        ) : (
          <View style={currentStyles.noDataView}>
            <Text style={currentStyles.noDataText}>No Product Found !</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={currentStyles.mainContainer}>
      <View style={currentStyles.headerContainer}>
        <View style={currentStyles.iconHolder}>
          <TouchableOpacity>
            <Icons name="bars" size={25} color={colors.darkOrchid} />
          </TouchableOpacity>
          <Text style={currentStyles.headerText}>ECOM Shop</Text>
        </View>

        <TouchableOpacity>
          <Feather name="shopping-bag" size={25} color={colors.darkOrchid} />
        </TouchableOpacity>
      </View>
      <View style={currentStyles.subContainer}>
        <View style={currentStyles.inputMainStyle}>
          <TextInput
            placeholder="Search here..."
            style={currentStyles.inputTextStyle}
          />
        </View>
        <Text style={currentStyles.productTextStyle}>Products</Text>
        <View style={currentStyles.flatlistContainer}>
          <FlatList
            data={productData}
            contentContainerStyle={{paddingBottom: 50}}
            renderItem={({item}) => {
              return (
                <Card
                  item={item}
                  onPress={() =>
                    navigation.navigate('ProductDetialsScreen', {
                      productId: item.id,
                    })
                  }
                />
              );
            }}
            keyExtractor={item => JSON.stringify(item.id)}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={handleEmptyList}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
