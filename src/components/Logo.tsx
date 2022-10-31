import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('../../static/logo.png')}
      style={{
        height: 30,
        width: 80,
      }}
    />
  );
};
export default Logo;
