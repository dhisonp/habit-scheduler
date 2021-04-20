import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { systemStyle } from './HomeScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import db from './database/SQLite';
import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

interface EditHabitProps {
    navigation: any,
    route: any,
}

const EditHabit = (props: EditHabitProps) => {

    const { id } = props.route.params;
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        console.log("Fetching data for id: " + id)
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * from Habits where id = ?',
                [id],
                (tx, results) => {
                    setData(results.rows.item(0));
                },
                (tx, error) => {
                    alert(error);
                }
            );
        });
    }, [])

    const deleteHabit = () => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM Habits WHERE id=?', [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'Habit deleted successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => props.navigation.dispatch(
                                        StackActions.replace('Home')
                                    ),
                                },
                            ],
                            { cancelable: false }
                        );
                    }
                });
        });
    }

    return (
        <View style={styles.container}>
            <View style={systemStyle.header}>
                <Text style={systemStyle.headerTitle}>Edit habit</Text>
            </View>
            <View style={[systemStyle.body]}>
                <Text>id: {id}</Text>
                <Text>name: {data.name}</Text>
            </View>
            <View style={systemStyle.footer}>
                <TouchableOpacity onPress={deleteHabit}>
                    <FontAwesome5 name={'trash'} size={34} light />
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={'#e0fcff'} translucent={false} />
        </View>
    );
};

export default EditHabit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0fcff',
    }
});
