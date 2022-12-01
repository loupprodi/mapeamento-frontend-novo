import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import HomeScreen from '../pages/Home';
import SignInScreen from '../pages/SignIn';
import SignUpScreen from '../pages/SingUp';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerTitle: '', headerStyle: {backgroundColor: '#7159c1'}}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Routes;
