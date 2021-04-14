import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("Data");

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Habits (id integer primary key not null, name)' //add description, timestamp, etc.
        );
    });
}

export default db;

// export const push = () => {
//     let newPush = "Hey! It's a new habit!";

//     db.transaction(tx => {
//         // tx.executeSql('INSERT INTO Names(name) VALUES (?)', [newName], update());
//         tx.executeSql('INSERT INTO Habits(name) VALUES (?)', [newPush], () => alert("Success push!"));
//     });
// };

// const update = () => {
//     console.log(db)
//     db.transaction(tx => {
//         tx.executeSql(
//             'SELECT name from Names',
//             [],
//             (tx, { rows }) => {
//                 setNames(() => {
//                     let retRA = [];
//                     rows._array.forEach(elem => {
//                         retRA.unshift(elem.name);
//                     });
//                     return retRA;
//                 });
//             },
//             (tx, error) => {
//                 console.log(error);
//             }
//         );
//     });
// };