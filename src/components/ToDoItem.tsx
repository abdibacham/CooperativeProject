import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {UserData} from '../model';

export const AccountComponent: React.FC<{
  account: UserData;
  deleteAccount: Function;
}> = ({
  account: {FirstName, LastName, AccountNo, Balance, Transaction, Cause},
}) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionContain}>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>First Name: </Text>
          <Text style={styles.sectionTitle}>{FirstName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Last Name: </Text>
          <Text style={styles.sectionTitle}>{LastName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Account Number: </Text>
          <Text style={styles.sectionTitle}>{AccountNo}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Account Balance: </Text>
          <Text style={styles.sectionTitle}>{Balance}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Amount Spent: </Text>
          <Text style={styles.sectionTitle}>{Transaction}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Cause: </Text>
          <Text style={styles.sectionTitle}>{Cause}</Text>
        </View>
      </View>
      {/* <View style={styles.button}>
        <Button
          onPress={() => deleteAccount(id)}
          title="Delete"
          color="#00c3ff"
        />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  transactionContainer: {
    // paddingHorizontal: 24,
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  transactionContain: {
    // justifyContent: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    width: Dimensions.get('window').width - 50,

    marginBottom: 15,
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '400',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  button: {
    width: 100,
  },
});
