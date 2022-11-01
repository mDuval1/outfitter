import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

import Section from '../components/Section';
import Page from '../components/Page';

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
    <Page>
      <Section title="Closet">
        <Text>Search</Text>
      </Section>
    </Page>
  );
};

export default Search;
