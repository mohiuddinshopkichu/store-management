import React from 'react';
import {ROUTES} from '../constants';
import Settings from '../views/pages/home/Settings';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsDetail from '../views/pages/home/SettingsDetail';

const Stack = createStackNavigator();

function SettingsNavigator() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
