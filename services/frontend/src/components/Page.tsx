import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import Header from './Header';

type PageProps = {};

const Page = (props: PropsWithChildren<PageProps>) => {
  const { children } = props;
  return (
    <View>
      <Header />
      {children}
    </View>
  );
};

export default Page;
