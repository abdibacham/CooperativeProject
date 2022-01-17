import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Developed = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textColor}>Developed by: ABDI BACHA NAGEWO </Text>
        <Text style={styles.textColor}>Phone No: +251967398828 </Text>
        <Text style={styles.textColor}>Email: contactabdi.bacha@gmail.com</Text>
      </View>
    </View>
  );
};

export default Developed;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  textColor: {
    color: '#000',
  },
});
