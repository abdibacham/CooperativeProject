import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const AccountTransfer = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [accountNumber, setAccountNumber] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [remark, setRemark] = React.useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!firstName.trim()) {
      Alert.alert('Please Enter First Name');
      return;
    }
    //Check for the Email TextInput
    if (!lastName.trim()) {
      Alert.alert('Please Enter Last Name');
      return;
    }
    if (!accountNumber.trim()) {
      Alert.alert('Please Enter Account Number');
      return;
    }
    if (!amount.trim()) {
      Alert.alert('Please Enter Amount of transfer');
      return;
    }
    if (!remark.trim()) {
      Alert.alert('Please Enter your remark');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    createTwoButtonAlert();
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Money Transfer',
      `Are sure you want to transfer ${amount} birr`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => successFull()},
      ],
    );
  const successFull = () =>
    Alert.alert(`${amount} Birr Transferred SuccessFully`);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      // style={styles.container}
    >
      {/* <Text>Account Transfer</Text> */}
      <View style={styles.contain}>
        <View>
          <Text>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setFirstName(text)}
            value={firstName}
            placeholder="enter your first name"
          />
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setLastName(text)}
            value={lastName}
            placeholder="enter your last name"
          />
        </View>
        <View>
          <Text>Account Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAccountNumber(text)}
            value={accountNumber}
            placeholder="enter your account number"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text>Amount</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setAmount(text)}
            value={amount}
            placeholder="enter your amount of transfer"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text>Remark</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setRemark(text)}
            value={remark}
            placeholder="enter your remark"
          />
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

export default AccountTransfer;

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
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  text: {
    color: '#fff',
  },
});
