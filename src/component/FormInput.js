import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale, verticalScale} from '../helper/metrics';

const FormInput = ({title, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(14),
  },
});
