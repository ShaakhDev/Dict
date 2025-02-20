import {Text, View, ViewStyle} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={$container}>
      <Text>Home</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
};
