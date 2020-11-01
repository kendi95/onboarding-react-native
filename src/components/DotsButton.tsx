import React from 'react';
import {View} from 'react-native';

interface DotsButtonProps {
  selected: boolean;
}

const DotsButton: React.FC<DotsButtonProps> = ({selected}) => {
  return (
    <View
      style={{
        width: selected ? 6 : 4,
        height: selected ? 6 : 4,
        borderRadius: selected ? 3 : 2,
        marginHorizontal: 2,
        backgroundColor: selected
          ? 'rgba(255, 255, 255, 1)'
          : 'rgba(255, 255, 255, 0.5)',
      }}
    />
  );
};

export default DotsButton;
