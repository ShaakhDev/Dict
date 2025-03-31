import {Text} from '@/components';
import {sizing} from '@/theme';
import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

type MoreItemProps = {
  label: string;
  rightAction: React.ReactNode;
  onPress?: () => void;
};

export const MoreItem = ({label, rightAction, onPress}: MoreItemProps) => {
  return (
    <TouchableOpacity style={$item} onPress={onPress}>
      <Text weight="medium" style={{flex: 1}}>
        {label}
      </Text>
      {rightAction}
    </TouchableOpacity>
  );
};
const $item: ViewStyle = {
  paddingVertical: sizing.xs,
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: sizing.md,
};
