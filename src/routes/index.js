import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import HomeScreen from '../pages/Home';
import PreloadScreen from '../pages/Preload';
import RegisterStructureScreen from '../pages/RegisterStructure';
import RegisterTagsScreen from '../pages/RegisterTags';
import ShowTagsScreen from '../pages/ShowTags';
import SignInScreen from '../pages/SignIn';
import SignUpScreen from '../pages/SingUp';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen
        name="Preload"
        component={PreloadScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#3cb2ca',
          },
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RegisterStructure"
        component={RegisterStructureScreen}
        options={{
          headerTitle: 'Registrar Estrutura',
          headerStyle: {
            backgroundColor: '#3cb2ca',
          },
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ShowTags"
        component={ShowTagsScreen}
        options={{
          headerTitle: 'Tags da Estrutura',
          headerStyle: {
            backgroundColor: '#3cb2ca',
          },
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RegisterTags"
        component={RegisterTagsScreen}
        options={{
          headerTitle: 'Registrar Tag',
          headerStyle: {
            backgroundColor: '#3cb2ca',
          },
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Routes;
