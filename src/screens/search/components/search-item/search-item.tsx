import { Text } from '@/components';
import { useAppSelector } from '@/store';
import { colors, sizing } from '@/theme';
import { TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type SearchItemProps = {
  name: string;
  onPress: () => void;
};

export const SearchItem = ({ name, onPress }: SearchItemProps) => {
  const { theme } = useAppSelector(state => state.themeState);
  return (
    <TouchableOpacity style={$item} onPress={onPress}>
      <Icon name="search-outline" size={sizing.lg} color={colors[theme].separator} />
      <Text weight="semiBold">{name}</Text>
    </TouchableOpacity>
  );
};
const $item: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: sizing.sm,
  paddingVertical: sizing.sm,
};
