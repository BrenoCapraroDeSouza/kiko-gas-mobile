import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { StackRoutesProps } from '@/@types';
import { useAuth } from '@/hooks';
import { Login, MyAddresses, MyCylinders } from '@/screens';

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesProps>();

export function Routes() {
  const { isAuthenticated, isMakingRefresh } = useAuth();

  useEffect(() => {
    async function handleHiddenSplash(): Promise<void> {
      if (!isMakingRefresh) await SplashScreen.hideAsync();
    }

    handleHiddenSplash();
  }, [isMakingRefresh]);

  if (isMakingRefresh) return null;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={isAuthenticated ? 'MyAddresses' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        <Screen name='Login' component={Login} />
        <Screen name='MyAddresses' component={MyAddresses} />
        <Screen name='MyCylinders' component={MyCylinders} />
      </Navigator>
    </NavigationContainer>
  );
}
