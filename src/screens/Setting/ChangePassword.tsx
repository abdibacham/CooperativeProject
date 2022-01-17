import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!currentPassword.trim()) {
      Alert.alert('Please Enter Current Password');
      return;
    }
    //Check for the Email TextInput
    if (!newPassword.trim()) {
      Alert.alert('Please Enter Last Name');
      return;
    }
    if (!confirmPassword.trim()) {
      Alert.alert('Please Enter Account Number');
      return;
    }

    createTwoButtonAlert();
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Password Change',
      'Are sure you want to change your password',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => successFull()},
      ],
    );
  const successFull = () => Alert.alert('Password is Changed SuccessFully');

  return (
    <View style={styles.margin}>
      {/* <Text>Account Transfer</Text> */}
      <View style={styles.contain}>
        <View>
          <Text>Current Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setCurrentPassword(text)}
            value={currentPassword}
            placeholder="enter your current password"
          />
        </View>
        <View>
          <Text>New Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setNewPassword(text)}
            value={newPassword}
            placeholder="enter your new password"
          />
        </View>
        <View>
          <Text>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            placeholder="enter your confirm password"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={checkTextInput} style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

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
  margin: {
    marginBottom: 15,
  },
});
