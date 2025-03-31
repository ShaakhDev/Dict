import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';
import {BookmarkIcon, HomeIcon, MoreIcon} from '@/icons';
import {renderLabel, renderTabBarIcon} from './navigation-utils';
import {colors, sizing} from '@/theme';
import {MainHeader} from '@/components';
import {useAppSelector} from '@/store';

export type TabParamsList = {
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
    headerShown: true,
    header: () => <MainHeader showBackButton={false} title="Sevimlilar" />,
    tabBarLabel: renderLabel,
    tabBarIcon: renderTabBarIcon(BookmarkIcon),
  },
  Home: {
    tabBarLabel: renderLabel,
    tabBarIcon: renderTabBarIcon(HomeIcon),
  },
  More: {
    headerShown: true,
    header: () => <MainHeader showBackButton={false} title="Boshqa" />,

    tabBarLabel: renderLabel,
    tabBarIcon: renderTabBarIcon(MoreIcon),
  },
};

export const TabNavigator = () => {
  const {theme} = useAppSelector(state => state.themeState);
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: {backgroundColor: colors[theme].background},
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors[theme].primary,
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
