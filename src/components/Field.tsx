import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface FieldProps {
    placeholder: string,
    value: string,
    updateValue: any,
    lines?: any
}

const Field = (props: FieldProps) => {

    // var [value, updateValue] = React.useState('');
    var { value, updateValue, lines } = props;
    lines = lines === '' ? 1 : lines;

    return (
        <TextInput
            style={styles.container}
            placeholder={props.placeholder}
            value={value}
            onChangeText={(e) => updateValue(e)}
            // multiline={true}
            // numberOfLines={lines}
            textAlign='center'
            textAlignVertical='center'
        />
    );
};

export default Field;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minWidth: '60%',
        minHeight: 40,
        borderRadius: 14,
        paddingHorizontal: 8,
        marginVertical: 6,
    }
});
