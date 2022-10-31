import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ROUTES from './pages/routes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {Object.entries(ROUTES).map(([routeName, route]) => {
          return (
            <Tab.Screen
              key={routeName}
              name={routeName}
              component={route.component}
              options={{ tabBarIcon: route.icon, headerShown: false }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
