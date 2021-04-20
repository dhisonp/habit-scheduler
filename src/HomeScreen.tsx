import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, ScrollView, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HabitBubble from './components/HabitBubble';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import db from './database/SQLite';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {

    const { navigation } = props;
    const [habits, setHabits] = React.useState([]);

    const onAddBtn = () => {
        navigation.navigate('NewHabit')
    }

    const update = () => {
        console.log(db)
        db.transaction(tx => {
            tx.executeSql(
                'SELECT name from Habits',
                [],
                (tx, { rows }) => {
                    setHabits(() => {
                        let retRA: any = [];
                        rows._array.forEach(elem => {
                            retRA.unshift(elem.name);
                        });
                        return retRA;
                    });
                },
                (tx, error) => {
                    console.log("Error: ")
                    console.log(error);
                }
            );
        });
    };

    const renderHabits = (item: any) => {
        return (
            <HabitBubble title={item} color="peach" key={item} />
        );
    }

    const debug = () => {
        update();
        console.log(habits)
    }

    if(habits.length === 0){ //Implement loading screen
        update(); 
    } 

    return (
        <SafeAreaView style={systemStyle.container}>
            <View style={systemStyle.header}>
                <Text style={systemStyle.headerTitle}>Have-its</Text>
            </View>
            <View style={systemStyle.body}>
                <ScrollView contentContainerStyle={systemStyle.scrollview}>
                    {/* <HabitBubble title="A new habit here" color="peach" />
                    <HabitBubble title="A second habit here that's a little bit longer" color="lime" /> */}
                    {habits.map(item =>
                        renderHabits(item)
                    )}
                </ScrollView>
            </View>
            <View style={systemStyle.footer}>
                <TouchableOpacity activeOpacity={0.6} style={{ padding: 6 }} onPress={onAddBtn}>
                    <FontAwesome5 name={'plus-circle'} size={42} light />
                </TouchableOpacity>
                <Button title="Debug" onPress={debug} />
            </View>
            <StatusBar style="dark" backgroundColor="#fdf0ff" translucent={false} />
        </SafeAreaView>
    );
};

export const systemStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fdf0ff",
    },
    body: {
        // paddingVertical: 138,
        flex: 4,
    },
    scrollview: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        minWidth: '100%',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        minWidth: '100%',
        top: 4,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    addBtnCircle: {
        borderColor: 'black',
        borderWidth: 1,
        width: 40, height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
