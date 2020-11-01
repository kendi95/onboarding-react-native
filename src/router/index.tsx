import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Onboard from '../pages/Onboard';
import Login from '../pages/Login';
import {Alert} from 'react-native';

const {Navigator, Screen} = createStackNavigator();

const Router: React.FC = () => {
  const [firstLauch, setFirstLauch] = useState(false);

  useEffect(() => {
    async function getOnboard() {
      try {
        const isLauched = await AsyncStorage.getItem('@onboard/alreadyLauched');

        if (!isLauched) {
          await AsyncStorage.setItem(
            '@onboard/alreadyLauched',
            JSON.stringify({value: true}),
          );
          setFirstLauch(true);
          return;
        }
        setFirstLauch(false);
        return;
      } catch (error) {
        Alert.alert('Error', 'An error of storage was occurred.');
      }
    }
    getOnboard();
  }, []);

  if (!firstLauch) {
    return <Login />;
  }

  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Screen name="Onboard" component={Onboard} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
