import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../../../components/Section';
import theme from '../../../styles/theme';
import OutfitViewer from './OutfitViewer';

const OutfitOfTheDay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outfit of the day</Text>
      <View style={styles.containerContent}>
        <View style={styles.outfit}>
          <OutfitViewer />
        </View>
        <View style={styles.outfitDetails}>
          <Text>Outfit details</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  outfit: {
    flex: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  outfitDetails: {
    flex: 1,
    backgroundColor: theme.colors.primary.shade2,
  },
  container: {
    marginTop: 0,
    paddingHorizontal: 0,
    flex: 3,
    backgroundColor: theme.colors.primary.shade1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default OutfitOfTheDay;
