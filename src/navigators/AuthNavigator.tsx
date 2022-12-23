import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {COLORS, ROUTES} from '../constants';
import ForgotPassword from '../views/pages/auth/ForgotPassword';
import Login from '../views/pages/auth/Login';
import Register from '../views/pages/auth/Signup';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function AuthNavigator() {

  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: "route.params.userId",
        })}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
