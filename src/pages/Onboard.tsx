import {useNavigation, StackActions} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import SkipButton from '../components/SkipButton';
import NextButton from '../components/NextButton';
import DoneButton from '../components/DoneButton';
import DotsButton from '../components/DotsButton';

const Onboard: React.FC = () => {
  const {navigate, dispatch} = useNavigation();

  const onSkip = useCallback(() => {
    dispatch(StackActions.replace('Login'));
  }, [dispatch]);

  const onDone = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <Onboarding
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      DotComponent={DotsButton}
      onDone={onDone}
      onSkip={onSkip}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../../assets/onboarding-img1.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Hello world 1',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/onboarding-img2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Hello world 2',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../../assets/onboarding-img3.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Hello world 2',
        },
      ]}
    />
  );
};

export default Onboard;
