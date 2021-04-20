import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("Data");

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Habits(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50))',
            []
        );
    });
}

export default db;