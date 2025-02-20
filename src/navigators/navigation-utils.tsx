import {colors, sizing} from '@/theme';
import {Text, TextStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

type TTabLabel = {
  focused: boolean;
  color: string;
  children: string;
};

type TTabIcon = {
  focused: boolean;
  color: string;
  size: number;
};

export const renderLabel = ({children, focused}: TTabLabel) => (
  <Text
    style={[
      $tabLabel,
      {color: focused ? colors.primary : colors.tabUnfocused},
    ]}>
    {children}
  </Text>
);

export const renderTabBarIcon =
  (Icon: React.ComponentType<SvgProps>) =>
  ({focused, size}: TTabIcon) =>
    (
      <Icon
        stroke={focused ? colors.primary : colors.tabUnfocused}
        fontSize={size}
      />
    );

const $tabLabel: TextStyle = {
  fontSize: sizing.xs,
};
