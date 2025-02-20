import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigator';

type AppParamsList = {
  Auth: undefined;
  BottomTab: undefined;
  Search: undefined;
  About: undefined;
  Privacy: undefined;
  WordDetail: {id: string} | undefined;
};

const AppStack = createNativeStackNavigator<AppParamsList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="BottomTab" component={TabNavigator} />
    </AppStack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
