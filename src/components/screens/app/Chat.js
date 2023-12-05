import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Chat = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const bounceRef = useRef(null);
  const navigation = useNavigation();

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const bounce = () => {
    bounceRef.current.bounce(800);
  };

  const handlePress = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      bounce();
      setTimeout(() => {
        navigation.navigate('UserProfile');
      }, 500);
    }
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <TapGestureHandler onHandlerStateChange={handlePress}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
          },
        ]}>
        <Animatable.Text
          ref={bounceRef}
          animation="bounceIn"
          style={styles.chatText}>
          Chat
        </Animatable.Text>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});
