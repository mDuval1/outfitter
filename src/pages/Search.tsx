import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

import Section from '../components/Section';

export const SearchIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <MaterialIcons size={size} color={color} name={'search'} />;
};

type SearchProps = {
  navigation?: any;
};

const Search = ({ navigation }: SearchProps) => {
  return (
    <View>
      <Section title="Closet">
        <Text>Search</Text>
      </Section>
    </View>
  );
};

export default Search;
