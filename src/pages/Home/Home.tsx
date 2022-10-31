import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View, Button, StyleSheet } from 'react-native';

import Section from '../../components/Section';
import Header from '../../components/Header';
import OutfitOfTheDay from './components/OutfitOfTheDay';
import OutfitIdeas from './components/OutfitIdeas';

export const HomeIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <MaterialIcons size={size} color={color} name={'home'} />;
};

type HomeProps = {
  navigation?: any;
};

const Home = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <OutfitOfTheDay />
        <OutfitIdeas />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

export default Home;
