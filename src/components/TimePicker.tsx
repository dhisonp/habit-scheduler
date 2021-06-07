import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface TimePickerProps { }

const TimePicker = (props: TimePickerProps) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(Platform.OS === 'ios');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showPicker = () => {
        setShow(true);
    }

    return (
        <View style={styles.container}>
            {show && <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='time'
                is24Hour={false}
                display='default'
                onChange={onChange}
                style={styles.picker}
            />}
            {/* <Button title="Show time picker" onPress={showPicker} /> */}
        </View>
    );
};

export default TimePicker;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        marginVertical: 6,
    },
    picker: {
        // backgroundColor: 'red',
        minWidth: '20%',
    },
});
