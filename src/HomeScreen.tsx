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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fdf0ff' }}>
            <View style={styles.container}>
                <View style={styles.headerTitle}>
                    <Text style={styles.header}>Have-its</Text>
                </View>
                <ScrollView contentContainerStyle={styles.body}>
                    <HabitBubble title="A new habit here" color="peach" />
                    <HabitBubble title="A second habit here that's a little bit longer" color="lime" />
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity activeOpacity={0.6} style={{ padding: 6 }} onPress={onAddBtn}>
                        <FontAwesome5 name={'plus-circle'} size={42} light />
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="dark" backgroundColor="#fdf0ff" translucent={false} />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fdf0ff",
    },
    body: {
        paddingVertical: 138,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 12,
    },
    headerTitle: {
        flex: 0.3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 4,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        flex: 0.3,
        justifyContent: 'center',
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
