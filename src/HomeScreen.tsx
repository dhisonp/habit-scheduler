import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>Habit Scheduler</Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {}
});
