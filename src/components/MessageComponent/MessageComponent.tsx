import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {I_ThemeProps} from '../../config/theme';
import {styles} from './styles';
import {RootState} from '../../redux/store';
import {setMessageData} from '../../redux/message/messageSlice';

const MessageComponent = () => {
  const {colors} = useTheme() as I_ThemeProps;
  const [animation] = useState(new Animated.Value(350));
  const [timerId, setTimerID] = useState<any>();
  const currentStyles = styles(colors, animation);
  const dispatch = useDispatch();

  const message = useSelector((state: RootState) => state.message.value);

  useEffect(() => {
    if (message.message.length > 0) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        delay: 500,
        velocity: 1000,
        stiffness: 200,
      }).start();
      const timeoutId = setTimeout(() => {
        dispatch(setMessageData({message: '', messageType: ''}));
      }, 2000);
      setTimerID(timeoutId);
    } else {
      Animated.spring(animation, {
        toValue: 1000,
        useNativeDriver: true,
        delay: 500,
        velocity: 1000,
        stiffness: 200,
      }).start();
    }
  }, [message.message]);

  return (
    <View
      style={{
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
      }}>
      <TouchableWithoutFeedback
        onPressIn={() => {
          dispatch(setMessageData({message: '', messageType: ''}));
          clearTimeout(timerId);
        }}>
        <View style={currentStyles.mainHolder}>
          {message.messageType === 'success' && (
            <Animated.View style={[currentStyles.subContainer]}>
              <Icon name="checkcircle" size={25} color={'#338500'} />
              <Text style={currentStyles.successText}>{message.message}</Text>
            </Animated.View>
          )}
          {message.messageType === 'error' && (
            <Animated.View
              style={[currentStyles.subContainer, {borderColor: '#DE000E'}]}>
              <Icon name="closecircle" size={25} color={'#DE000E'} />
              <Text
                style={[currentStyles.successText, currentStyles.errorText]}>
                {message.message}
              </Text>
            </Animated.View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MessageComponent;
