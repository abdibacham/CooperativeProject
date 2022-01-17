/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './src/screens/Login';

import Home from './src/screens/Home';
// import OurServices from './src/screens/OurServices';
import About from './src/screens/About';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialUi from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// Our services
import AccountTransfer from './src/screens/OurServices/AccountTransfer';
import WaterBill from './src/screens/OurServices/WaterBill';
import AirTime from './src/screens/OurServices/AirTime';
import CovidDonation from './src/screens/OurServices/CovidDonation';
import Setting from './src/screens/Setting';
import Transactions from './src/screens/OurServices/Transactions';
import TrafficBill from './src/screens/OurServices/TrafficBill';
import ElectricBill from './src/screens/OurServices/ElectricBill';

import {AuthContext} from './src/context/context.api';
import {loginProps, UserData} from './src/model';
import {
  createTable,
  getAccountInfo,
  getDBConnection,
  setAccountInfo,
} from './src/db/db-service';
import Dstv from './src/screens/OurServices/Dstv';

const Tabs = createBottomTabNavigator();
const Drawers = createDrawerNavigator();
const Stacks = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons name="home" size={25} color="#00c3ff" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="Our Services"
        component={OurService}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <MaterialUi
                name="home-repair-service"
                size={25}
                color="#00c3ff"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialUi name="description" size={25} color="#00c3ff" />;
          },
        }}
      />
      <Tabs.Screen
        name="Setting"
        component={Setting}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons
                name="account-settings"
                size={25}
                color="#00c3ff"
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

function OurService() {
  return (
    <Drawers.Navigator>
      <Drawers.Screen
        name="AccountTransfer"
        component={AccountTransfer}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons
                name="bank-transfer"
                size={25}
                color="#00c3ff"
              />
            );
          },
        }}
      />
      <Drawers.Screen
        name="AirTime"
        component={AirTime}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return <MaterialUi name="attach-money" size={25} color="#00c3ff" />;
          },
        }}
      />
      <Drawers.Screen
        name="Covid Donation"
        component={CovidDonation}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return <FontAwesome name="donate" size={25} color="#00c3ff" />;
          },
        }}
      />
      <Drawers.Screen
        name="Water Bill"
        component={WaterBill}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons name="water" size={25} color="#00c3ff" />
            );
          },
        }}
      />
      <Drawers.Screen
        name="Traffic Penalty"
        component={TrafficBill}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons
                name="traffic-light"
                size={25}
                color="#00c3ff"
              />
            );
          },
        }}
      />
      <Drawers.Screen
        name="Electric Bill"
        component={ElectricBill}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <FontAwesome name="charging-station" size={25} color="#00c3ff" />
            );
          },
        }}
      />
      <Drawers.Screen
        name="Transactions"
        component={Transactions}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return <FontAwesome name="history" size={25} color="#00c3ff" />;
          },
        }}
      />
      <Drawers.Screen
        name="DSTV Payment"
        component={Dstv}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons
                name="television-guide"
                size={25}
                color="#00c3ff"
              />
            );
          },
        }}
      />
    </Drawers.Navigator>
  );
}

const App = () => {
  const [balance, setBalance] = React.useState<number>();
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [accountNo, setAccountNo] = React.useState<number>();

  const [transactions, setTransactions] = React.useState<UserData[]>();

  const login = React.useCallback((newLogin: loginProps) => {
    setBalance(newLogin.balance);
    setFirstName(newLogin.firstName);
    setLastName(newLogin.lastName);
    setAccountNo(newLogin.accountNo);
  }, []);

  const transactionSetter = React.useCallback((newUserData: UserData[]) => {
    setTransactions(newUserData);
  }, []);

  const balanceCalc = React.useCallback(
    (oldBalance: number, reduction: number) => {
      const newValue = oldBalance - reduction;
      setBalance(newValue);
    },
    [],
  );

  const loadDataCallback = React.useCallback(async () => {
    try {
      const initAccount = [
        {
          id: 0,
          FirstName: 'abdi',
          LastName: 'bacha',
          AccountNo: 1000001292292192,
          Balance: 50000,
          Transaction: 200,
          Cause: 'Air Time',
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
    } catch (err) {
      console.error(err);
    }
  }, []);

  React.useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
    <AuthContext.Provider
      value={{
        balance: balance || 330,
        firstName: firstName || 'abdi',
        lastName: lastName || 'bacha',
        accountNo: accountNo || 33333333430,
        transactions: transactions || [
          {
            id: 0,
            FirstName: '',
            LastName: '',
            AccountNo: 0,
            Balance: 0,
            Transaction: 0,
            Cause: '',
          },
        ],
        transactionSetter: transactionSetter,
        login: login,
        balanceCalc: balanceCalc,
      }}>
      <NavigationContainer>
        <Stacks.Navigator initialRouteName="Login">
          <Stacks.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stacks.Screen
            name="MainStack"
            component={MainStack}
            options={{headerShown: false}}
          />
        </Stacks.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
