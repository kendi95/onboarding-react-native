import React from 'react';
import {Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

const NextButton: React.FC = ({...rest}) => {
  return (
    <BorderlessButton {...rest} style={{marginHorizontal: 16}}>
      <Text style={{color: '#fff'}}>Next</Text>
    </BorderlessButton>
  );
};

export default NextButton;
