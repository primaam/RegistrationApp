import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {FormButton, Header} from '../component';
import {horizontalScale, moderateScale, verticalScale} from '../helper/metrics';
import {launchImageLibrary} from 'react-native-image-picker';
import Tesseract, {createWorker} from 'tesseract.js';
import ImageViewer from 'react-native-image-zoom-viewer';
import exampleImage from '../assets/cara-mudah-cek-ktp-asli-atau-palsu-718x375.jpeg';
import {FormContext} from '../helper/context';

const UploadPhotoScreens = ({navigation}) => {
  const {data, setData} = React.useContext(FormContext);
  const [selectedIdImage, setSelectedIdImage] = React.useState(null);
  const [recognizedText, setRecognizedText] = React.useState('');
  const [imageZoomVisible, setImageZoomVisible] = React.useState(false);

  const [selectedSelfie, setSelectedSelfie] = React.useState(null);
  const [selectedFreeImage, setSelectedFreeImage] = React.useState(null);

  const selectImageHandler = type => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        // maxHeight: 2000,
        // maxWidth: 2000,
      },
      response => {
        console.log('test ocr', response.assets);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          if (type === 'id') {
            console.log(imageUri);
            setSelectedIdImage(imageUri);
            setData({...data, idImage: imageUri});
            performOCR(imageUri);
          } else if (type === 'selfie') {
            setSelectedSelfie(imageUri);
            setData({...data, selfieImage: imageUri});
          } else {
            setSelectedFreeImage(imageUri);
            setData({...data, freeImage: imageUri});
          }
        }
      },
    );
  };

  const performOCR = async imagePath => {
    console.log('imagePath', imagePath);

    try {
      const worker = await createWorker();
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.reinitialize('eng');
      const {
        data: {text},
      } = await worker.recognize(
        imagePath
          ? imagePath
          : '../assets/cara-mudah-cek-ktp-asli-atau-palsu-718x375.jpeg',
      );

      const wordAt = text.search('NIK:');
      const filter = text.substring(wordAt, wordAt + 17);
      setRecognizedText(filter);
      setData({...data, id: filter});
    } catch (error) {
      console.error('OCR Error: ', error);
    }
  };

  const IdImages = selectedIdImage ? [{url: selectedIdImage}] : [];
  const selfieImages = selectedSelfie ? [{url: selectedFreeImage}] : [];
  const freeImages = selectedFreeImage ? [{url: selectedFreeImage}] : [];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header onPress={() => navigation.goBack()} />
      <View style={{flexGrow: 1, marginBottom: verticalScale(40)}}>
        <View style={{flexGrow: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            {/* <ImageViewer
              imageUrls={[
                {
                  url: Image.resolveAssetSource(exampleImage).uri,
                },
              ]}
              renderIndicator={() => null}
              enableSwipeDown
              onSwipeDown={() => setImageZoomVisible(false)}
              onClick={() => setImageZoomVisible(true)}
              style={{height: verticalScale(250), width: '100%'}}
            /> */}
            {selectedIdImage ? (
              <ImageViewer
                imageUrls={IdImages}
                renderIndicator={() => null}
                enableSwipeDown
                onSwipeDown={() => setImageZoomVisible(false)}
                onClick={() => setImageZoomVisible(true)}
                style={{height: verticalScale(250), width: '100%'}}
              />
            ) : (
              <View style={styles.emptyPhotoContainer}>
                <Text>Pilih foto KTP mu dengan tombol dibawah</Text>
              </View>
            )}

            <Text style={{marginVertical: 10}}>NIK: {recognizedText}</Text>
            <FormButton
              onPress={() => selectImageHandler('id')}
              title={'Pick ID Card'}
            />

            {selectedSelfie ? (
              <ImageViewer
                imageUrls={selfieImages}
                renderIndicator={() => null}
                enableSwipeDown
                onSwipeDown={() => setImageZoomVisible(false)}
                onClick={() => setImageZoomVisible(true)}
                style={{height: verticalScale(250), width: '100%'}}
              />
            ) : (
              <View style={styles.emptyPhotoContainer}>
                <Text>Pilih foto Selfie mu dengan tombol dibawah</Text>
              </View>
            )}

            <FormButton
              onPress={() => selectImageHandler('selfie')}
              title={'Pick Your Selfie'}
            />

            {selectedFreeImage ? (
              <ImageViewer
                imageUrls={freeImages}
                renderIndicator={() => null}
                enableSwipeDown
                onSwipeDown={() => setImageZoomVisible(false)}
                onClick={() => setImageZoomVisible(true)}
                style={{height: verticalScale(250), width: '100%'}}
              />
            ) : (
              <View style={styles.emptyPhotoContainer}>
                <Text>Pilih fotomu dengan tombol dibawah</Text>
              </View>
            )}

            <FormButton
              onPress={() => selectImageHandler('')}
              title={'Pick Your Images'}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.nextButtonContainer}>
        <FormButton
          onPress={() => navigation.navigate('Preview')}
          title={'Next'}
        />
      </View>
    </SafeAreaView>
  );
};

export default UploadPhotoScreens;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(50),
    paddingBottom: verticalScale(65),
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
  nextButtonContainer: {
    paddingHorizontal: horizontalScale(20),
    bottom: verticalScale(20),
    left: 0,
    right: 0,
    position: 'absolute',
  },
});
