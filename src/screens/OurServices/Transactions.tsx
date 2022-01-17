import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Transactions} from '../../components/Transactions';

// import {AddTransaction, Transactions} from '../../components/Transactions';

import {AuthContext} from '../../context/context.api';
import {getDBConnection, setAccountInfo} from '../../db/db-service';
import {newTransaction, UserData} from '../../model';

const Testing = () => {
  const auth = React.useContext(AuthContext);
  const {
    transactions,
    firstName,
    lastName,
    accountNo,
    balance,
    transactionSetter,
  } = auth;

  // const AddTransaction = async (props: newTransaction) => {
  //   if (!firstName.trim()) return;
  //   try {
  //     const newTodos: UserData[] = [
  //       ...transactions,
  //       {
  //         id: transactions.length
  //           ? transactions.reduce((acc, cur) => {
  //               if (cur.id > acc.id) return cur;
  //               return acc;
  //             }).id + 1
  //           : 0,
  //         Balance: balance,
  //         FirstName: firstName,
  //         LastName: lastName,
  //         AccountNo: accountNo,
  //         Transaction: props.Transactions,
  //         Cause: props.Cause,
  //       },
  //     ];
  //     transactionSetter(newTodos);
  //     const db = await getDBConnection();
  //     await setAccountInfo(db, newTodos);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <SafeAreaView>
      <View style={[styles.appTitleView]}>
        <View
          style={{
            width: '80%',
            backgroundColor: '#fefefe',
            paddingVertical: 4,
          }}>
          <Text style={styles.appTitleText}> Transaction History </Text>
        </View>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{marginTop: 50}}>
          {transactions.map(account => (
            <Transactions key={account.id} transaction={account} />
          ))}
        </View>
        {/* <View style={styles.textInputContainer}>
          <Button
            onPress={() =>
              AddTransaction({
                Transactions: 300,
                Cause: 'Air Time',
              })
            }
            title="Add ToDo"
            color="#00c3ff"
            accessibilityLabel="add todo item"
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appTitleView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    position: 'absolute',
    top: -10,
    zIndex: 20,
    width: '100%',
  },
  appTitleText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#00c3ff',
    textAlign: 'center',
  },
  textInputContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    margin: 10,
  },
});
export default Testing;
