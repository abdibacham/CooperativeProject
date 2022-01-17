import {createContext} from 'react';
import {loginProps, UserData} from '../model';

export type ThemeContextType = {
  balance: number;
  firstName: string; //   setTheme: (Theme: Theme) => void;
  lastName: string;
  accountNo: number;
  login: (newLogin: loginProps) => void;
  transactionSetter: (UserData: UserData[]) => void;
  transactions: UserData[];
  balanceCalc: (balance: number, reduction: number) => void;
};

export const AuthContext = createContext<ThemeContextType>({
  balance: 0,
  firstName: '',
  lastName: '',
  accountNo: 0,
  //   setTheme: theme => console.warn('no theme provider'),
  login: () => console.log('nothing here'),
  transactionSetter: () => console.log('nothing here'),
  transactions: [
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
  balanceCalc: () => console.log('nothing here'),
});
