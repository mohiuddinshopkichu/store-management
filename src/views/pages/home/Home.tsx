import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Home!  <Ionicons name="md-checkmark-circle" size={32} color="green" /></Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
