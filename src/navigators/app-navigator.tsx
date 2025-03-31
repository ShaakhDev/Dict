import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { TabNavigator } from './tab-navigator';
import { colors } from '@/theme';
import * as Screens from '@/screens';
import { MainHeader } from '@/components';
import { useAppSelector } from '@/store';

export type AppParamsList = {
  Auth: undefined;
  BottomTab: undefined;
  Search: undefined;
  About: undefined;
  Privacy: undefined;
  SubCategories: { id?: string; title: string } | undefined;
  WordList: { id?: string; title: string } | undefined;
  WordDetail: { id: string; title: string } | undefined;
  Login: undefined;
  Register: undefined;
  Initial: undefined;
};

const AppStack = createNativeStackNavigator<AppParamsList>();

type TAppStackOptions = {
  [key in keyof AppParamsList]: NativeStackNavigationOptions;
};

const AppStackScreenOptions: TAppStackOptions = {
  Initial: {},
  About: {
    headerShown: true,
    header: props => (
      <MainHeader
        showBackButton={true}
        onBackPress={props.navigation.goBack}
        title="Ilova haqida"
      />
    ),
  },
  Auth: {},
  BottomTab: {},
  Login: {},
  Register: {},
  Privacy: {
    headerShown: true,
    header: props => (
      <MainHeader
        showBackButton={true}
        onBackPress={props.navigation.goBack}
        title="Maxfiylik siyosati"
      />
    ),
  },
  Search: {},
  SubCategories: {
    headerShown: true,
    header: props => (
      <MainHeader
        showBackButton={true}
        onBackPress={props.navigation.goBack}
        title={(props.route.params as AppParamsList['SubCategories'])?.title}
      />
    ),
  },
  WordDetail: {
    headerShown: true,
    header: props => (
      <MainHeader
        showBackButton={true}
        onBackPress={props.navigation.goBack}
        title={(props.route.params as AppParamsList['WordDetail'])?.title}
      />
    ),
  },
  WordList: {
    headerShown: true,
    header: props => (
      <MainHeader
        showBackButton={true}
        onBackPress={props.navigation.goBack}
        title={(props.route.params as AppParamsList['WordList'])?.title}
      />
    ),
  },
};

export const AppNavigator = () => {
  const { theme } = useAppSelector(state => state.themeState);
  return (
    <AppStack.Navigator
      initialRouteName='Initial'
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors[theme].background },
        headerTintColor: colors.white,
        statusBarBackgroundColor: colors[theme].primary,
      }}>

      <AppStack.Screen name="Initial" component={Screens.InitialScreen} />
      <AppStack.Screen name="BottomTab" component={TabNavigator} />
      <AppStack.Screen name="Search" component={Screens.SearchScreen} />
      <AppStack.Screen
        name="SubCategories"
        options={AppStackScreenOptions.SubCategories}
        component={Screens.SubCategoriesScreen}
      />
      <AppStack.Screen
        options={AppStackScreenOptions.WordList}
        name="WordList"
        component={Screens.WordListScreen}
      />
      <AppStack.Screen
        options={AppStackScreenOptions.WordDetail}
        name="WordDetail"
        component={Screens.WordDetailScreen}
      />
      <AppStack.Screen
        options={AppStackScreenOptions.About}
        name="About"
        component={Screens.AboutScreen}
      />
      <AppStack.Screen
        options={AppStackScreenOptions.Privacy}
        name="Privacy"
        component={Screens.PrivacyScreen}
      />
      <AppStack.Screen name='Login' component={Screens.LoginScreen} />
      <AppStack.Screen name='Register' component={Screens.RegisterScreen} />
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
