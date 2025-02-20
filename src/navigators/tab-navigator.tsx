import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';
import {BookmarkIcon, HomeIcon, MoreIcon} from '@/icons';
import {renderLabel, renderTabBarIcon} from './navigation-utils';
import {sizing} from '@/theme';

type TabParamsList = {
  Home: undefined;
  Favorites: undefined;
  More: undefined;
};
const Tab = createBottomTabNavigator<TabParamsList>();

type TTabOptions = {
  [key in keyof TabParamsList]: BottomTabNavigationOptions;
};

const TabOptions: TTabOptions = {
  Favorites: {
    tabBarLabel: renderLabel,
    tabBarIcon: renderTabBarIcon(BookmarkIcon),
  },
  Home: {
    tabBarLabel: renderLabel,
    tabBarIcon: renderTabBarIcon(HomeIcon),
  },
  More: {
    tabBarLabel: renderLabel,
    tabBarIcon: renderTabBarIcon(MoreIcon),
  },
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: sizing.xs,
        },
      }}>
      <Tab.Screen
        options={TabOptions.Home}
        name="Home"
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        options={TabOptions.Favorites}
        name="Favorites"
        component={Screens.FavoritesScreen}
      />
      <Tab.Screen
        options={TabOptions.More}
        name="More"
        component={Screens.MoreScreen}
      />
    </Tab.Navigator>
  );
};
