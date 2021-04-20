import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Field from './components/Field';
import { systemStyle } from './HomeScreen';
import db from './database/SQLite';
import { StackActions } from '@react-navigation/native';

interface NewHabitProps {
    navigation: any
}

const NewHabit = (props: NewHabitProps) => {

    var [name, updateName] = React.useState('');
    var [time, updateTime] = React.useState('');
    var [description, updateDescription] = React.useState('');

    const onBack = () => {
        props.navigation.dispatch(
            StackActions.replace('Home')
        );

    }

    const update = () => {
        alert("Saved!")
        console.log(`New habit entry: ${name}`)
        onBack();
    }

    const onSave = () => {
        if (name === '') { name = "Default name" }
        let newName = name;

        db.transaction(tx => {
            tx.executeSql('INSERT INTO Habits(name) VALUES (?)', [newName], update());
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
                        <Field placeholder="Habit name" value={name} updateValue={updateName} />
                        <Field placeholder="Description" value={description} updateValue={updateDescription} multiline={true} lines={4} />
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
