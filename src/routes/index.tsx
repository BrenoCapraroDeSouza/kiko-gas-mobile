import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { StackRoutesProps } from '@/@types';
import { Storage } from '@/libs';
import { Login, MyAddresses, MyGas } from '@/screens';

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesProps>();

export function Routes() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    async function getToken(): Promise<void> {
      const token = await Storage.getItem('token');

      setIsAuthenticated(!!token);
      setIsLoading(false);

      await SplashScreen.hideAsync();
    }

    getToken();
  }, []);

  if (isLoading) return null;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={isAuthenticated ? 'MyAddresses' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        <Screen name='Login' component={Login} />
        <Screen name='MyAddresses' component={MyAddresses} />
        <Screen name='MyGas' component={MyGas} />
      </Navigator>
    </NavigationContainer>
  );
}
