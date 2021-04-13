import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <Text style={styles.title}>Home</Text>
            </View>
            <View style={styles.subcontainer}>
                <Text>Habit Scheduler</Text>
                <StatusBar style="auto" />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fdf0ff",
    },
    subcontainer: {
        // backgroundColor: 'red',
        flex: 1,
        marginHorizontal: 48,
        marginVertical: 138,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        position: 'absolute',
        top: 36, left: 0, bottom: 0, right: 0,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});
