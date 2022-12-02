import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import UserContextProvider from './context/UserContext';
import Routes from './routes';

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserContextProvider>
  );
}
