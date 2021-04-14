import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HabitBubble from './components/HabitBubble';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {

    const { navigation } = props;

    const onAddBtn = () => {
        navigation.navigate('NewHabit')
    }

    return (
        <SafeAreaView style={systemStyle.container}>
            <View style={systemStyle.header}>
                <Text style={systemStyle.headerTitle}>Have-its</Text>
            </View>
            <View style={systemStyle.body}>
                <ScrollView contentContainerStyle={systemStyle.scrollview}>
                    <HabitBubble title="A new habit here" color="peach" />
                    <HabitBubble title="A second habit here that's a little bit longer" color="lime" />
                </ScrollView>
            </View>
            <View style={systemStyle.footer}>
                <TouchableOpacity activeOpacity={0.6} style={{ padding: 6 }} onPress={onAddBtn}>
                    <FontAwesome5 name={'plus-circle'} size={42} light />
                </TouchableOpacity>
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
