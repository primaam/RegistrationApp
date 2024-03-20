import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../helper/metrics';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backContainer} onPress={onPress}>
        <Text>{`< Go Back`}</Text>
      </Pressable>
      <View style={{flex: 0.5}}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(20),
    // backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  backContainer: {
    justifyContent: 'center',
  },
});
