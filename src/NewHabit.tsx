import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Field from './components/Field';

interface NewHabitProps { }

const NewHabit = (props: NewHabitProps) => {

    var [name, updateName] = React.useState('');
    var [time, updateTime] = React.useState('');
    var [description, updateDescription] = React.useState('');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#e0fcff' translucent={false} />
            <View style={styles.body}>
                <Field placeholder="Habit name" value={name} updateValue={updateName} />
                <Field placeholder="Description" value={description} updateValue={updateDescription} multiline={true} lines={4} />
                {/* Time field */}
            </View>
        </View>
    );
};

export default NewHabit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0fcff',
    },
    header: {

    },
    body: {
        // paddingHorizontal: 48,
        paddingVertical: 138,
    },
    footer: {

    },
});
