/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';

import Localization from './src/pages/Localization';
import Loading from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Localization />
        <StatusBar style="auto" translucent />
      </View>
    </NavigationContainer>
  );
}
