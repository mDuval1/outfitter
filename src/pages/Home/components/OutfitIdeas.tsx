import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../styles/theme';

const OutfitIdeas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outfit ideas</Text>
      <View style={styles.containerContent}>
        <Text>Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 0,
    flex: 2,
    backgroundColor: theme.colors.primary.shade1,
  },
  containerContent: {
    paddingHorizontal: 8,
    backgroundColor: theme.colors.primary.shade3,
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default OutfitIdeas;
