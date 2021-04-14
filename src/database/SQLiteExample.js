import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { SQLite } from 'expo-sqlite';

let db = SQLite.openDatabase('db.db');

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Names (id integer primary key not null, name)'
  );
});

export default function App(props) {
  //random names to pick from to add to the database
  const nameRA = ['Joe Brown', 'Jane Doe', 'Sherlock Holmes', 'Picard'];

  //hook for displaying the names in the database
  const [names, setNames] = useState([]);

  //add the results of the database into the names hook
  const update = () => {
    console.log(db)
    db.transaction(tx => {
      tx.executeSql(
        'SELECT name from Names',
        [],
        (tx, { rows }) => {
          setNames(() => {
            let retRA = [];
            rows._array.forEach(elem => {
              retRA.unshift(elem.name);
            });
            return retRA;
          });
        },
        (tx, error) => {
          console.log(error);
        }
      );
    });
  };

  //inserts a name into the database, calls update if successful
  const addName = () => {
    let newName = nameRA[Math.floor(Math.random() * nameRA.length)];

    db.transaction(tx => {
      tx.executeSql('INSERT INTO Names(name) VALUES (?)', [newName], update());
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight + 30,
      padding: 8,
      backgroundColor: '#ecf0f1',
    },
  });

  return (
    <View style={styles.container}>
      <Button
        title="Click to add a name."
        onPress={() => {
          addName();
        }}
      />
      <ScrollView>
        {names.map(elem => {
          return <Text>{elem}</Text>;
        })}
      </ScrollView>
    </View>
  );
}
