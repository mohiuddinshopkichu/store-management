import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import Icon from '@expo/vector-icons/Ionicons';
import CustomDrawer from '../views/components/CustomDrawer';
import Wallet from '../views/pages/home/Wallet';
import Notifications from '../views/pages/home/Notifications';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: 'Wallet',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="wallet" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
