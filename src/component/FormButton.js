import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale, verticalScale} from '../helper/metrics';

const FormButton = ({onPress, title, disabled}) => {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  container: {
    minWidth: horizontalScale(200),
    height: verticalScale(50),
    backgroundColor: 'blue',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});
