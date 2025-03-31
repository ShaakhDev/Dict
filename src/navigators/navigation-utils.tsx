import {colors, sizing} from '@/theme';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
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
  <Text style={[$tabLabel]}>{children}</Text>
);

export const renderTabBarIcon =
  (Icon: React.ComponentType<SvgProps>) =>
  ({focused, size}: TTabIcon) =>
    (
      <View
        style={[
          $tabIcon,
          {backgroundColor: focused ? colors.white : 'transparent'},
        ]}>
        <Icon
          stroke={focused ? colors.primary : colors.white}
          fontSize={size}
        />
      </View>
    );

const $tabLabel: TextStyle = {
  fontSize: sizing.xs,
  color: colors.white,
  marginTop: sizing.xxs,
};

const $tabIcon: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  borderRadius: 19,
};
