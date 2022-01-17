import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';

import HomeImg from '../../assets/Diaspora.png';
import Logo from '../../assets/logo.svg';
import Ria from '../../assets/ria.jpg';
import Transfer from '../../assets/transfast.jpg';
import Western from '../../assets/westernunion.jpg';
import MainLogo from '../../assets/MainLogo.png';
import Developed from '../../components/developed';

const Home = () => {
  return (
    <View style={styles.scrollContainer}>
      <View style={styles.mainLogo}>
        <Image style={styles.mainLogoImg} source={MainLogo} />
      </View>

      <Text style={styles.textTitle}>Committed to Breakthrough</Text>
      <View style={styles.imgcontainer}>
        <ImageBackground style={styles.image} source={HomeImg} />
      </View>
      <View style={styles.linkContainer}>
        <View style={styles.linkLogo}>
          <Image style={styles.linkImg} source={Ria} />
        </View>
        <View style={styles.linkLogo}>
          <Image style={styles.linkImg} source={Transfer} />
        </View>
        <View style={styles.linkLogo}>
          <Image style={styles.linkImg} source={Western} />
        </View>
      </View>
      <Developed />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 30,
  },
  imgcontainer: {
    width: 350,
    height: 250,
    // marginLeft: 50,
    // backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '90%',
  },
  linkLogo: {
    width: 100,
    height: 100,
  },
  linkImg: {
    width: '100%',
    height: '50%',
  },
  linkContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 20,
    color: '#34abeb',
    fontWeight: '500',
  },
  mainLogo: {
    width: 250,
    height: 100,
    // backgroundColor: 'red',
  },
  mainLogoImg: {
    width: '100%',
    height: '100%',
  },
});
