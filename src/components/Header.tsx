import React, { type PropsWithChildren } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../styles/theme';
import Logo from './Logo';

const commonProps = {
  backgroundColor: theme.colors.secondary.shade0,
};

const AddButton = () => {
  return (
    <Icon.Button
      name="add"
      {...commonProps}
      style={{ margin: 0 }}
      iconStyle={{ margin: 0 }}
    />
  );
};

const NotificationButton = () => {
  return <Icon.Button name="notifications" {...commonProps} />;
};

const SettingsButton = () => {
  return <Icon.Button name="settings" {...commonProps} />;
};

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Logo />
      </View>
      <View style={styles.headerButtons}>
        <AddButton />
        <NotificationButton />
        <SettingsButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 0,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary.shade0,
  },
  headerButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Header;
