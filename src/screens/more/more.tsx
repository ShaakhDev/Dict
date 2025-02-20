import {Text, View, ViewStyle} from 'react-native';

export const MoreScreen = () => {
  return (
    <View style={$container}>
      <Text>More</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
};
