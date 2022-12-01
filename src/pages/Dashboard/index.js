import React from 'react';
import {StatusBar, Text, View} from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={{backgroundColor: 'blue'}}>
      <StatusBar />
      <Text>Dashboard bem vindo</Text>
    </View>
  );
};

export default DashboardScreen;
