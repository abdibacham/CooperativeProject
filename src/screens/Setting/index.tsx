import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {LanguageSelection} from '../../components/langaugeSelection';
import ChangePassword from './ChangePassword';

import {AuthContext} from '../../context/context.api';

const Setting = () => {
  const auth = React.useContext(AuthContext);
  const {balance, firstName, lastName, accountNo} = auth;

  const [selected, setSelected] = React.useState({
    accountInfo: true,
    changePassword: false,
  });

  console.log(balance, firstName, lastName, accountNo);
  return (
    <ScrollView contentContainerStyle={styles().transactionContainer}>
      <View style={styles().panelContainer}>
        <TouchableOpacity
          onPress={() =>
            setSelected({
              accountInfo: true,
              changePassword: false,
            })
          }>
          <Text style={styles(selected.accountInfo).panelText}>
            Account Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setSelected({
              accountInfo: false,
              changePassword: true,
            })
          }>
          <Text style={styles(selected.changePassword).panelText}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
      <>
        {selected.accountInfo === true ? (
          <>
            <Text style={styles().textTitle}>Account Information</Text>
            <View style={styles().transactionContain}>
              <View style={styles().textContainer}>
                <Text style={styles().sectionTitle}>First Name: </Text>
                <Text style={styles().sectionTitle}>{firstName}</Text>
              </View>
              <View style={styles().textContainer}>
                <Text style={styles().sectionTitle}>Last Name: </Text>
                <Text style={styles().sectionTitle}>{lastName}</Text>
              </View>

              <View style={styles().textContainer}>
                <Text style={styles().sectionTitle}>Account Number: </Text>
                <Text style={styles().sectionTitle}>{accountNo}</Text>
              </View>
              <View style={styles().textContainer}>
                <Text style={styles().sectionTitle}>Balance: </Text>
                <Text style={styles().sectionTitle}>{balance}</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={styles().textTitle}>Change Your Password</Text>
            <ChangePassword />
          </>
        )}
      </>
      <LanguageSelection />
    </ScrollView>
  );
};

export default Setting;

const styles = (selected?: boolean) =>
  StyleSheet.create({
    transactionContainer: {
      // justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      height: Dimensions.get('window').height,
    },
    transactionContain: {
      backgroundColor: '#fefefe',
      flexDirection: 'column',
      justifyContent: 'center',
      width: Dimensions.get('window').width - 50,
      marginBottom: 15,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 15,
      height: 200,
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: '400',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    button: {
      width: 100,
    },
    textTitle: {
      marginTop: 50,
      marginBottom: 30,
      fontSize: 20,
      color: '#34abeb',
      fontWeight: '500',
    },
    panelContainer: {
      flexDirection: 'row',
      width: '90%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    panelText: {
      borderBottomWidth: 2,
      paddingBottom: 4,
      borderBottomColor: selected ? '#34abeb' : 'gray',
      color: selected ? '#34abeb' : 'gray',
      fontWeight: selected ? 'bold' : '400',
    },
  });
