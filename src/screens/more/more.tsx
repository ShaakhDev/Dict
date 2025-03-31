import { colors, sizing, useAppTheme } from '@/theme';
import { View, ViewStyle, Switch, Share } from 'react-native';
import { MoreItem } from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamsList } from 'src/navigators/tab-navigator';
import { AppParamsList } from '@/navigators';

export const MoreScreen = ({
  navigation,
}: BottomTabScreenProps<TabParamsList & AppParamsList>) => {
  const { isDarkmode, toggleTheme } = useAppTheme()

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'I am sharing this',
        url: 'https://www.google.com',
        title: 'Ulashing',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigate = (screen: keyof AppParamsList) => () => {
    navigation.navigate(screen);
  };
  return (
    <View style={$container}>
      <MoreItem
        label="Qorong'u rejim"
        onPress={toggleTheme}
        rightAction={<Switch value={isDarkmode} onValueChange={toggleTheme} />}
      />
      <View style={$separator} />
      <MoreItem
        label="Do'stingizga ulashing"
        onPress={handleShare}
        rightAction={<Icon name="share-social" size={20} color={colors.text} />}
      />
      <View style={$separator} />
      <MoreItem
        label="Ilova haqida"
        onPress={handleNavigate('About')}
        rightAction={
          <Icon name="chevron-forward" size={20} color={colors.text} />
        }
      />
      <View style={$separator} />
      <MoreItem
        label="Maxfiylik siyosati"
        onPress={handleNavigate('Privacy')}
        rightAction={
          <Icon name="chevron-forward" size={20} color={colors.text} />
        }
      />
    </View>
  );
};

const $container: ViewStyle = {
  padding: sizing.md,
  flex: 1,
};
const $separator: ViewStyle = {
  height: 1,
  width: '100%',
  backgroundColor: '#E5E5E5',
  // marginVertical: sizing.xs,
};
