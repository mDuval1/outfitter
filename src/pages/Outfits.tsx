import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

import Section from '../components/Section';
import Page from '../components/Page';

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
    <Page>
      <Section title="Outfits">
        <Text>Outfits</Text>
      </Section>
    </Page>
  );
};

export default Outfits;
