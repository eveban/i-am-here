/* eslint-disable react/function-component-definition */
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = ({ props }) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={42} props={props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#243f4d',
    alignItems: 'center',
  },
});

export default Loading;
