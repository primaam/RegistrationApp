/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext} from 'react';
import {FormContext} from './src/helper/context';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppStack from './src/navigation/AppStack';

function App(): React.JSX.Element {
  const defaultValue = {
    id: '',
    firstName: '',
    lastName: '',
    biodata: '',
    province: '',
    city: '',
    district: '',
    subDistrict: '',
    idImage: null,
    selfieImage: null,
    freeImage: null,
  };

  const [data, setData] = React.useState(defaultValue);
  return (
    <FormContext.Provider value={{data, setData}}>
      <AppStack />
    </FormContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
