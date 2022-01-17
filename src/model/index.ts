export type UserData = {
  id: number;
  FirstName: string;
  LastName: string;
  AccountNo: number;
  Balance: number;
  Transaction: number;
  Cause: string;
};

export interface userInfoProps {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  accountNo: number;
  balance: number;
}

export interface loginProps {
  balance: number;
  firstName: string;
  lastName: string;
  accountNo: number;
}

export interface newTransaction {
  Transactions: number;
  Cause: string;
}
