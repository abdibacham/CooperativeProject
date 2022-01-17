import React from 'react';
import {
  View,
  Text,
  // Button,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {AuthContext} from '../../context/context.api';
import {
  createTable,
  getAccountInfo,
  getDBConnection,
  setAccountInfo,
} from '../../db/db-account';
import {loginProps, userInfoProps} from '../../model';

const Login = ({navigation}) => {
  const [transactions, setTransactions] = React.useState<userInfoProps[]>();

  const loadDataCallback = React.useCallback(async () => {
    try {
      const initAccount = [
        {
          id: 0,
          firstName: 'abdi',
          lastName: 'bacha',
          accountNo: 1000001292292192,
          balance: 50000,
          password: 'abdiBacha',
        },
        {
          id: 1,
          firstName: 'abdi2',
          lastName: 'bacha2',
          accountNo: 10000012922921923,
          balance: 500002,
          password: 'abdiBacha2',
        },
      ];
      const db = await getDBConnection();
      await createTable(db);
      const storedTodoItems = await getAccountInfo(db);
      if (storedTodoItems.length) {
        setTransactions(storedTodoItems);
      } else {
        await setAccountInfo(db, initAccount);
        setTransactions(initAccount);
      }
      // console.log(storedTodoItems);
    } catch (err) {
      console.error(err);
    }
  }, []);

  React.useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const auth = React.useContext(AuthContext);

  const [name, onNameChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');

  const [error, setError] = React.useState({
    name: false,
    password: false,
  });

  const handleLogin = () => {
    if (!name.trim()) {
      setError(prev => ({...prev, name: true}));
      return;
    } else if (name.trim()) {
      setError(prev => ({...prev, name: false}));
    }
    if (!password.trim()) {
      setError(prev => ({...prev, password: true}));
      return;
    } else if (password.trim()) {
      setError(prev => ({...prev, password: false}));
    }
    // console.log(account, 'login');
    handleToHome();
  };

  const handleToHome = () => {
    if (transactions) {
      console.log(transactions, 'login');
      for (let i = 0; i < transactions?.length; i++) {
        if (
          transactions[i].firstName === name &&
          transactions[i].password === password
        ) {
          const Account: loginProps = {
            firstName: transactions[i].firstName,
            lastName: transactions[i].lastName,
            balance: transactions[i].balance,
            accountNo: transactions[i].accountNo,
          };
          auth.login(Account);
          navigation.navigate('MainStack');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Cooperative Bank of Oromia</Text>
      </View>
      <Text style={styles.textTitle}>Login</Text>
      <View style={styles.contain}>
        <TextInput
          style={styles.input}
          onChangeText={text => onNameChange(text)}
          value={name}
          placeholder="enter your name here"
        />
        <View style={styles.flex}>
          {error.name && (
            <Text style={styles.errorText}>{'please enter the amount'}</Text>
          )}
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => onPasswordChange(text)}
          value={password}
          placeholder="enter your password here"
        />
        <View style={styles.flex}>
          {error.password && (
            <Text style={styles.errorText}>{'please enter the amount'}</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    alignItems: 'center',
    // alignContent: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    borderColor: '#34abeb',
    color: 'gray',
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
  textTitle: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 20,
    color: '#34abeb',
    fontWeight: '500',
  },
  banner: {
    width: '90%',
    backgroundColor: '#34abeb',
    height: 100,
    marginTop: -200,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: '#fefefe',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
