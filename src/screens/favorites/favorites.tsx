import {Text, View, ViewStyle} from 'react-native';

export const FavoritesScreen = () => {
  return (
    <View style={$container}>
      <Text>Favorites</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
};
