import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {UserData} from '../model';

const tableName = 'accountTransaction';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'account-transaction.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
         balance TEXT NOT NULL, firstName VARCHAR(55), lastName VARCHAR(55), accountNo INT(8), transactions INT(8), causes VARCHAR(55)
    );`;

  await db.executeSql(query);
};

export const getAccountInfo = async (
  db: SQLiteDatabase,
): Promise<UserData[]> => {
  try {
    const transactions: UserData[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, balance, firstName, lastName, accountNo, transactions, causes  FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        transactions.push(result.rows.item(index));
      }
    });
    return transactions;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get transactions !!!');
  }
};

export const setAccountInfo = async (
  db: SQLiteDatabase,
  userAccounts: UserData[],
) => {
  const insertQuery =
    `INSERT INTO ${tableName}(rowid, balance, firstName, lastName, accountNo, transactions, causes) values` +
    userAccounts
      .map(
        i =>
          `(${i.id}, '${i.Balance}', '${i.FirstName}','${i.LastName}','${i.AccountNo}','${i.Transaction}','${i.Cause}')`,
      )
      .join(',');

  return db.executeSql(insertQuery);
};

export const deleteAccountInfo = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
