import React from 'react';
import {Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

const DoneButton: React.FC = ({...rest}) => {
  return (
    <BorderlessButton {...rest} style={{marginHorizontal: 16}}>
      <Text style={{color: '#fff'}}>Done</Text>
    </BorderlessButton>
  );
};

export default DoneButton;
