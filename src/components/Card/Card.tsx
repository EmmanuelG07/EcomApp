import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {I_ThemeProps} from '../../config/theme';
import {styles} from './styles';

type I_CardType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
};

type I_CardProps = {
  item: I_CardType;
  onPress: () => void;
};

const Card = (props: I_CardProps) => {
  const {colors} = useTheme() as I_ThemeProps;
  const currentStyles = styles(colors);

  const {item, onPress} = props;

  return (
    <TouchableOpacity style={currentStyles.mainContainer} onPress={onPress}>
      <ImageBackground
        source={{
          uri: item.thumbnail,
        }}
        style={currentStyles.imageStyle}
        imageStyle={currentStyles.imgaeBorderStyle}>
        <View style={currentStyles.discountHolder}>
          <Text style={currentStyles.discountText}>
            {item.discountPercentage}%
          </Text>
        </View>
      </ImageBackground>
      <View style={currentStyles.detailsHolder}>
        <Text
          style={currentStyles.productTitle}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={currentStyles.descriptionText}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {item.description}
        </Text>
        <View style={currentStyles.amountHolder}>
          <Text style={currentStyles.amountText}>${item.price}</Text>
          <Icons name="cart-arrow-down" size={25} color={colors.darkOrchid} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
