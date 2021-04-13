import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HabitBubbleProps { }

const HabitBubble = (props: HabitBubbleProps) => {
    return (
        <View style={styles.container}>
            <Text>HabitBubble</Text>
        </View>
    );
};

export default HabitBubble;

const styles = StyleSheet.create({
    container: {
        
    }
});
