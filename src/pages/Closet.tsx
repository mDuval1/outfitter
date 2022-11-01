import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

import Section from '../components/Section';
import Page from '../components/Page';

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
    <Page>
      <Section title="Closet">
        <Text>Closet</Text>
      </Section>
    </Page>
  );
};

export default Closet;
