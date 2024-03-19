import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import {horizontalScale, moderateScale, verticalScale} from '../helper/metrics';
import {FormButton, FormInput} from '../component';

const FormScreens = () => {
  const [province, setProvince] = React.useState([]);
  const [provinceOptOpen, setProvinceOptOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const [city, setCity] = React.useState([]);
  const [cityOptOpen, setCityOptOpen] = React.useState(false);
  const [cityValue, setCityValue] = React.useState(null);

  const [district, setDistrict] = React.useState([]);
  const [districtOptOpen, setDistrictOptOpen] = React.useState(false);
  const [districtValue, setDistrictValue] = React.useState(null);

  const [subDistrict, setSubDistrict] = React.useState([]);
  const [subDistrictOptOpen, setSubDistrictOptOpen] = React.useState(false);
  const [subDistrictValue, setSubDistrictValue] = React.useState(null);

  React.useEffect(() => {
    axios({
      url: 'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',
      method: 'GET',
    }).then(res => {
      setTimeout(() => {
        setProvince(res.data);
      }, 3000);
    });
  }, []);

  /**
   * fuction for only one dropdown open
   * */
  const handleOpenDropdown = type => {
    switch (type) {
      case 'province':
        setCityOptOpen(false);
        setDistrictOptOpen(false);
        setSubDistrictOptOpen(false);
        break;
      case 'city':
        setProvinceOptOpen(false);
        setDistrictOptOpen(false);
        setSubDistrictOptOpen(false);
        break;
      case 'district':
        setProvinceOptOpen(false);
        setCityOptOpen(false);
        setSubDistrictOptOpen(false);
        break;
      case 'subDistrict':
        setProvinceOptOpen(false);
        setCityOptOpen(false);
        setDistrictOptOpen(false);
        break;
      default:
        break;
    }
  };

  const handleLocationSelection = ({id, name, type}) => {
    switch (type) {
      case 'province':
        setCity([]);
        setDistrict([]);
        setSubDistrict([]);
        // setData(name)
        axios({
          url: `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`,
          method: 'GET',
        })
          .then(res => {
            setCity(res.data);
            setCityValue(null);
            setDistrictValue(null);
            setSubDistrictValue(null);
            // console.log(res.data);
          })
          .catch(error => console.error(error));

        break;
      case 'city':
        setDistrict([]);
        setSubDistrict([]);

        axios({
          url: `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`,
          method: 'GET',
        })
          .then(res => {
            setDistrict(res.data);
            setDistrictValue(null);
            setSubDistrictValue(null);
          })
          .catch(error => console.error(error));
        break;

      case 'district':
        setSubDistrict([]);
        axios({
          url: `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`,
          method: 'GET',
        })
          .then(res => {
            setSubDistrict(res.data);
            setSubDistrictValue(null);
          })
          .catch(error => console.error(error));
        break;
      default:
        break;
    }
  };

  const handleProvinceSelect = (id, name) => {
    // setValue(id);
    // setData(name)
    setCity([]);
    setDistrict([]);
    setSubDistrict([]);

    axios({
      url: `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`,
      method: 'GET',
    })
      .then(res => {
        setCity(res.data);
        setCityValue(null);
        setDistrictValue(null);
        setSubDistrictValue(null);
        // console.log(res.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {province.length > 0 ? (
        <View style={{flexGrow: 1}}>
          <View style={{flexGrow: 1}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.container}>
              <Text style={styles.title}>Registration Form</Text>

              <FormInput title={'First Name'}>
                <TextInput style={styles.input} placeholder="First Name" />
              </FormInput>
              <FormInput title={'Last Name'}>
                <TextInput style={styles.input} placeholder="Last Name" />
              </FormInput>
              <FormInput title={'Biodata'}>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Biodata"
                  multiline={true}
                  numberOfLines={3}
                />
              </FormInput>
              <FormInput title={'Provinsi'}>
                <DropDownPicker
                  schema={{
                    label: 'name',
                    value: 'id',
                  }}
                  style={{marginTop: verticalScale(10)}}
                  placeholder="Pilih Provinsi"
                  //   onChangeValue={value => {
                  //     handleProvinceSelect(value);
                  //   }}
                  onSelectItem={value => {
                    handleLocationSelection({
                      id: value?.id,
                      name: value?.name,
                      type: 'province',
                    });
                  }}
                  onOpen={() => handleOpenDropdown('province')}
                  open={provinceOptOpen}
                  setOpen={setProvinceOptOpen}
                  value={value}
                  setValue={setValue}
                  items={province}
                  setItems={setProvince}
                  listMode="SCROLLVIEW"
                  searchable
                  dropDownDirection="TOP"
                  scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                  }}
                  dropDownContainerStyle={{
                    zIndex: 1,
                    // position: 'absolute',
                  }}
                />
              </FormInput>
              <FormInput title={'Kota/Kabupaten'}>
                <DropDownPicker
                  schema={{
                    label: 'name',
                    value: 'id',
                  }}
                  style={{marginTop: verticalScale(10)}}
                  placeholder="Pilih Kota/Kabupaten"
                  onSelectItem={value => {
                    handleLocationSelection({
                      id: value?.id,
                      name: value?.name,
                      type: 'city',
                    });
                  }}
                  onOpen={() => handleOpenDropdown('city')}
                  open={cityOptOpen}
                  setOpen={setCityOptOpen}
                  value={cityValue}
                  setValue={setCityValue}
                  items={city}
                  setItems={setCity}
                  listMode="SCROLLVIEW"
                  searchable
                  scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                  }}
                  dropDownDirection="TOP"
                  dropDownContainerStyle={{
                    zIndex: 1,
                  }}
                  // for disable, must be pick province first
                  disabled={city.length === 0 ? true : false}
                  disabledStyle={{
                    backgroundColor: 'lightgrey',
                  }}
                />
              </FormInput>
              <FormInput title={'Kecamatan'}>
                <DropDownPicker
                  schema={{
                    label: 'name',
                    value: 'id',
                  }}
                  style={{marginTop: verticalScale(10)}}
                  placeholder="Pilih Kecamatan"
                  onSelectItem={value => {
                    handleLocationSelection({
                      id: value?.id,
                      name: value?.name,
                      type: 'district',
                    });
                  }}
                  onOpen={() => handleOpenDropdown('district')}
                  open={districtOptOpen}
                  setOpen={setDistrictOptOpen}
                  value={districtValue}
                  setValue={setDistrictValue}
                  items={district}
                  setItems={setDistrict}
                  listMode="SCROLLVIEW"
                  searchable
                  scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                  }}
                  dropDownDirection="TOP"
                  dropDownContainerStyle={{
                    zIndex: 1,
                  }}
                  // for disable, must be pick city first
                  disabled={district.length === 0 ? true : false}
                  disabledStyle={{
                    backgroundColor: 'lightgrey',
                  }}
                />
              </FormInput>
              <FormInput title={'Kelurahan/Desa'}>
                <DropDownPicker
                  schema={{
                    label: 'name',
                    value: 'id',
                  }}
                  style={{marginTop: verticalScale(10)}}
                  placeholder="Pilih Kelurahan/Desa"
                  onOpen={() => handleOpenDropdown('subDistrict')}
                  open={subDistrictOptOpen}
                  setOpen={setSubDistrictOptOpen}
                  value={subDistrictValue}
                  setValue={setSubDistrictValue}
                  items={subDistrict}
                  setItems={setSubDistrict}
                  listMode="SCROLLVIEW"
                  searchable
                  scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                  }}
                  dropDownContainerStyle={{
                    zIndex: 1,
                  }}
                  // for disable, must be pick city first
                  disabled={subDistrict.length === 0 ? true : false}
                  disabledStyle={{
                    backgroundColor: 'lightgrey',
                  }}
                />
              </FormInput>
            </ScrollView>
          </View>
          <View
            style={{
              paddingHorizontal: horizontalScale(20),
              bottom: 0,
              left: 0,
              right: 0,
              position: 'absolute',
            }}>
            <FormButton onPress={() => console.log('test')} title={'Submit'} />
          </View>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={'blue'} />
          <Text style={styles.loadingText}>Please wait</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FormScreens;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(50),
    paddingBottom: verticalScale(65),
  },
  contentContainer: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: horizontalScale(10),
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: moderateScale(24),
    marginTop: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: verticalScale(20),
  },
  input: {
    height: verticalScale(40),
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: verticalScale(10),
    // paddingHorizontal: horizontalScale(10),
  },
  multilineInput: {
    height: verticalScale(80),
  },
});
