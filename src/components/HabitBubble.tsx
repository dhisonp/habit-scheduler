import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';

interface HabitBubbleProps {
    id: number;
    title: string, //50 character limit
    color: string,
    onPress: any;
}

const placeholder = "Placeholder text habit here"

const HabitBubble = (props: HabitBubbleProps) => {
    var [color, setColor] = React.useState('white');

    switch (props.color) {
        case "white": {
            color = 'white';
            break;
        }
        case "peach": {
            color = '#fdffe0';
            break;
        }
        case "cyan": {
            color = "#e0fdff";
            break;
        }
        case "lime": {
            color = "#f1ffe3";
            break;
        }
        case "grape": {
            color = "#f1e0ff"
            break;
        }
    }

    const onPress = () => {
        props.onPress(props.title)
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={[styles.container, { backgroundColor: color }]}>
                <Text>
                    {props.id}: {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HabitBubble;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 14,
        minWidth: '40%',
        height: 40,
        marginVertical: 4,
        justifyContent: 'center',
    }
});
