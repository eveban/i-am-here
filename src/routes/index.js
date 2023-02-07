import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Localization from '../pages/Localization';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Localization} />
    </Stack.Navigator>
  );
}

export default Navigator;
