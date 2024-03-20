import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FormButton, Header} from '../component';
import {horizontalScale, moderateScale, verticalScale} from '../helper/metrics';
import {FormContext} from '../helper/context';
import ImageViewer from 'react-native-image-zoom-viewer';

const PreviewScreens = ({navigation}) => {
  const {data} = React.useContext(FormContext);
  const [recognizedText, setRecognizedText] = React.useState('');
  const [imageZoomVisible, setImageZoomVisible] = React.useState(false);

  const handleSubmit = () => {
    const reqData = JSON.stringify(data);
    console.log('submit', reqData);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header onPress={() => navigation.goBack()} />
      <View style={{flexGrow: 1}}>
        <View style={{flexGrow: 1, marginBottom: verticalScale(40)}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            <View>
              <Text style={styles.title}>Personal Data</Text>
            </View>
            {/* form */}
            <View style={styles.formContainer}>
              <Text style={styles.form}>NIK</Text>
              <Text style={styles.form}>{data.id}</Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.form}>First Name</Text>
              <Text style={styles.form}>{data.firstName}</Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.form}>Last Name</Text>
              <Text style={styles.form}>{data.lastName}</Text>
            </View>
            <View
              style={{
                marginVertical: verticalScale(10),
                borderBottomWidth: 0.5,
                color: 'lightgrey',
              }}>
              <Text style={{fontSize: moderateScale(16)}}>Biodata</Text>
              <Text
                numberOfLines={4}
                style={{
                  fontSize: moderateScale(16),
                  marginVertical: verticalScale(10),
                }}>
                {data.biodata}
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.form}>Provinsi</Text>
              <Text numberOfLines={2} style={styles.form}>
                {data.province}
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={{...styles.form}}>Kota/Kabupaten</Text>
              <Text numberOfLines={2} style={{...styles.form, flex: 0.6}}>
                {data.city}
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.form}>Kecamatan</Text>
              <Text numberOfLines={2} style={styles.form}>
                {data.district}
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.form}>Kelurahan/Desa</Text>
              <Text numberOfLines={2} style={styles.form}>
                {data.subDistrict}
              </Text>
            </View>

            {/* photo */}
            <View>
              <Text style={styles.form}>Upload Foto</Text>
              {data.idImage ? (
                <ImageViewer
                  imageUrls={data.idImage}
                  renderIndicator={() => null}
                  enableSwipeDown
                  onSwipeDown={() => setImageZoomVisible(false)}
                  onClick={() => setImageZoomVisible(true)}
                  style={{height: verticalScale(250), width: '100%'}}
                />
              ) : (
                <View style={styles.emptyPhotoContainer}>
                  <Text>Pilih foto KTP mu pada halaman sebelumnya</Text>
                </View>
              )}
              {data.selfieImage ? (
                <ImageViewer
                  imageUrls={data.selfieImage}
                  renderIndicator={() => null}
                  enableSwipeDown
                  onSwipeDown={() => setImageZoomVisible(false)}
                  onClick={() => setImageZoomVisible(true)}
                  style={{height: verticalScale(250), width: '100%'}}
                />
              ) : (
                <View style={styles.emptyPhotoContainer}>
                  <Text>Pilih foto Selfie mu pada halaman sebelumnya</Text>
                </View>
              )}

              {data.freeImage ? (
                <ImageViewer
                  imageUrls={data.selfieImage}
                  renderIndicator={() => null}
                  enableSwipeDown
                  onSwipeDown={() => setImageZoomVisible(false)}
                  onClick={() => setImageZoomVisible(true)}
                  style={{height: verticalScale(250), width: '100%'}}
                />
              ) : (
                <View style={styles.emptyPhotoContainer}>
                  <Text>Pilih fotomu pada halaman sebelumnya</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.submitButtonContainer}>
        <FormButton
          onPress={() => {
            handleSubmit();
          }}
          title={'Submit'}
        />
      </View>
    </SafeAreaView>
  );
};

export default PreviewScreens;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(65),
  },
  submitButtonContainer: {
    paddingHorizontal: horizontalScale(20),
    bottom: verticalScale(20),
    left: 0,
    right: 0,
    position: 'absolute',
  },
  emptyPhotoContainer: {
    width: '100%',
    height: verticalScale(150),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    color: 'lightgrey',
    marginVertical: verticalScale(10),
  },
  title: {
    textAlign: 'center',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: verticalScale(20),
  },
  form: {
    fontSize: moderateScale(16),
    marginVertical: verticalScale(10),
  },
});
