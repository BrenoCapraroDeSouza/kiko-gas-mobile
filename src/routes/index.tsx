import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackRoutesProps } from '@/@types';
import { Address, Login, MyGas } from '@/screens';

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesProps>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}
      >
        <Screen name='Login' component={Login} />
        <Screen name='Address' component={Address} />
        <Screen name='MyGas' component={MyGas} />
      </Navigator>
    </NavigationContainer>
  );
}
