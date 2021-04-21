import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import Field from './components/Field';
import { systemStyle } from './HomeScreen';
import db from './database/SQLite';
import { StackActions } from '@react-navigation/native';
// import { v4 as uuid } from 'uuid';

interface NewHabitProps {
    navigation: any
}

const NewHabit = (props: NewHabitProps) => {

    var [name, setName] = React.useState(''); //Add validation (char limit)
    var [time, setTime] = React.useState('');
    var [description, setDescription] = React.useState('');

    const onBack = () => {
        props.navigation.dispatch(
            StackActions.replace('Home')
        );

    }

    const update = () => {
        Alert.alert(
            'Success',
            'Habit added',
            [
                {
                    text: 'Ok',
                    onPress: onBack,
                },
            ],
            { cancelable: false }
        );
        console.log(`New habit entry: ${name}, ${description}`)
    }

    const onSave = () => {
        if (name === '') { name = "Default name" }
        let newName = name;
        // let id = uuid();

        db.transaction(tx => {
            tx.executeSql('INSERT INTO Habits (name, description) VALUES (?,?)', [newName, description], update());
        });
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#e0fcff' translucent={false} />
                <View style={systemStyle.header}>
                    <Text style={systemStyle.headerTitle}>
                        New habit
                </Text>
                </View>
                <View style={systemStyle.body}>
                    <ScrollView contentContainerStyle={systemStyle.scrollview}>
                        <Field placeholder="Habit name" value={name} updateValue={setName} />
                        <Field placeholder="Description" value={description} updateValue={setDescription} multiline={true} lines={4} />
                        {/* Time field */}
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={onBack}>
                            <Text style={styles.footerBtn}>
                                {'<< Back'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSave}>
                            <Text style={styles.footerBtn}>
                                {"Save >>"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
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
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        minWidth: '100%',
    },
    footerBtn: {
        color: '#242424',
        fontSize: 22,
        fontWeight: 'bold',
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 12,
    }
});
