import {colors, sizing} from '@/theme';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from '../text';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '@/store';
type MainHeaderProps = {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
};
export const MainHeader = ({
  title,
  showBackButton,
  onBackPress,
}: MainHeaderProps) => {
  const {theme} = useAppSelector(state => state.themeState);
  return (
    <View style={[$headerContainer, {backgroundColor: colors[theme].primary}]}>
      {showBackButton && (
        <Pressable onPress={onBackPress} hitSlop={10}>
          <Icon name="arrow-back" size={20} color={colors.white} />
        </Pressable>
      )}
      {title && (
        <Text
          size="lg"
          weight="bold"
          style={[$headerTitle, showBackButton && {marginRight: sizing.md}]}>
          {title}
        </Text>
      )}
    </View>
  );
};

const $headerContainer: ViewStyle = {
  height: 60,
  width: '100%',
  // backgroundColor: colors.primary,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: sizing.md,
};
const $headerTitle: TextStyle = {
  flex: 1,
  color: colors.white,
  textAlign: 'center',
};
