import { Text } from '@/components';
import { AppParamsList } from '@/navigators';
import { useAppSelector } from '@/store';
import { colors, sizing } from '@/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeHeader = () => {
  const navigation = useNavigation<NavigationProp<AppParamsList>>();
  const { theme } = useAppSelector((state) => state.themeState);
  const handleNavigate = () => {
    navigation.navigate('Search');
  };
  return (
    <View style={[$headerContainer, { backgroundColor: colors[theme].primary }]}>
      <Text
        weight="semiBold"
        size="xl"
        style={{ textAlign: 'center', color: colors.white }}>
        {"Gastronomik lug'at -\nOshxona bilimining kaliti"}
      </Text>

      <TouchableOpacity
        activeOpacity={0.9}
        style={$inputWrapper}
        onPress={handleNavigate}>
        <Icon name="search-outline" size={24} color={colors.placeholder} />
        <Text preset="secondary">Qidiruv...</Text>
      </TouchableOpacity>
    </View>
  );
};
const $headerContainer: ViewStyle = {
  minHeight: 200,
  borderBottomLeftRadius: sizing.xl,
  borderBottomRightRadius: sizing.xl,
  paddingBottom: sizing.md,
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingHorizontal: sizing.xl,
};
const $inputWrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: sizing.xs,
  backgroundColor: colors.white,
  width: '100%',
  borderRadius: sizing.xl,
  marginTop: sizing.lg,
  paddingHorizontal: sizing.md,
  paddingVertical: sizing.xs,
};
