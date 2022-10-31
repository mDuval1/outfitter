import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

import Section from '../components/Section';

export const OutfitsIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <MaterialIcons size={size} color={color} name={'save'} />;
};

type OutfitsProps = {
  navigation?: any;
};

const Outfits = ({ navigation }: OutfitsProps) => {
  return (
    <View>
      <Section title="Outfits">
        <Text>Outfits</Text>
      </Section>
    </View>
  );
};

export default Outfits;
