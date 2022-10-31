import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

import Section from '../components/Section';

export const ClosetIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <MaterialIcons size={size} color={color} name={'list'} />;
};

type ClosetProps = {
  navigation?: any;
};

const Closet = ({ navigation }: ClosetProps) => {
  return (
    <View>
      <Section title="Closet">
        <Text>Closet</Text>
      </Section>
    </View>
  );
};

export default Closet;
