import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {newTransaction, UserData} from '../../model';
import {AuthContext} from '../../context/context.api';
import {getDBConnection, setAccountInfo} from '../../db/db-service';

const ElectricBill = () => {
  const auth = React.useContext(AuthContext);
  const {
    transactions,
    firstName,
    lastName,
    accountNo,
    balance,
    transactionSetter,
  } = auth;

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const [error, setError] = React.useState({
    amount: false,
    phoneNumber: false,
  });

  const checkTextInput = () => {
    //Check for the Name TextInput

    if (!phoneNumber.trim()) {
      setError(prev => ({...prev, phoneNumber: true}));
      return;
    } else if (phoneNumber.trim()) {
      setError(prev => ({...prev, phoneNumber: false}));
    }
    if (!amount.trim()) {
      setError(prev => ({...prev, amount: true}));
      return;
    } else if (amount.trim()) {
      setError(prev => ({...prev, amount: false}));
    }

    //Checked Successfully
    //Do whatever you want
    createTwoButtonAlert();
  };

  const Transaction: newTransaction = {
    Transactions: parseInt(amount, 10),
    Cause: 'Air time',
  };

  const AddTransaction = async (props: newTransaction) => {
    if (!firstName.trim()) return;
    try {
      const newTodos: UserData[] = [
        ...transactions,
        {
          id: transactions.length
            ? transactions.reduce((acc, cur) => {
                if (cur.id > acc.id) return cur;
                return acc;
              }).id + 1
            : 0,
          Balance: balance,
          FirstName: firstName,
          LastName: lastName,
          AccountNo: accountNo,
          Transaction: props.Transactions,
          Cause: props.Cause,
        },
      ];
      transactionSetter(newTodos);
      const db = await getDBConnection();
      await setAccountInfo(db, newTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Money Transfer',
      `Are sure you want to buy ${amount} birr of airtime`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            AddTransaction(Transaction);
          },
        },
      ],
    );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      // style={styles.container}
    >
      {/* <Text>Account Transfer</Text> */}
      <View style={styles.contain}>
        <View>
          <Text>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            placeholder="enter your phone number"
            keyboardType="numeric"
          />
          {error.phoneNumber && (
            <Text style={styles.errorText}>{'please enter the amount'}</Text>
          )}
        </View>
        <View>
          <Text>Amount</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAmount(text)}
            value={amount}
            placeholder="enter your amount of airtime to buy"
            keyboardType="numeric"
          />
          <View style={styles.flex}>
            {error.amount && (
              <Text style={styles.errorText}>{'please enter the amount'}</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={checkTextInput} style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ElectricBill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // justifyContent: 'center',
    marginTop: 100,
    alignItems: 'center',
  },
  contain: {
    alignItems: 'center',
    // alignContent: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    width: '85%',
    // height: 300,
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#34abeb',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34abeb',
    height: 30,
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  text: {
    color: '#fff',
  },
  errorText: {
    color: 'red',
  },
  flex: {
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 20,
  },
});
