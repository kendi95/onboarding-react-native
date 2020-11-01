import React from 'react';
import {StatusBar} from 'react-native';

import Router from './router';

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Router />
    </>
  );
};

export default App;
