import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {userInfoProps} from '../model';

const tableName = 'newAccount';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'user-account.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        balance TEXT NOT NULL, firstName VARCHAR(55), lastName VARCHAR(55), accountNo INT(8), password VARCHAR(55)
    );`;

  await db.executeSql(query);
};

export const getAccountInfo = async (
  db: SQLiteDatabase,
): Promise<userInfoProps[]> => {
  try {
    const userInfo: userInfoProps[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, balance, firstName, lastName, accountNo, password FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        userInfo.push(result.rows.item(index));
      }
    });
    return userInfo;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const setAccountInfo = async (
  db: SQLiteDatabase,
  userAccounts: userInfoProps[],
) => {
  const insertQuery =
    `INSERT INTO ${tableName}(rowid, balance, firstName, lastName, accountNo, password) values` +
    userAccounts
      .map(
        i =>
          `(${i.id}, '${i.balance}', '${i.firstName}', '${i.lastName}', '${i.accountNo}', '${i.password}')`,
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
