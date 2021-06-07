import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface FieldProps {
    placeholder: string,
    value: string,
    updateValue: any,
    lines?: any,
    multiline?: boolean,
}

const Field = (props: FieldProps) => {

    // var [value, updateValue] = React.useState('');
    var { value, updateValue } = props;

    return (
        <TextInput
            style={[styles.container, { height: props.lines > 1 ? 100 : 40, }]}
            placeholder={props.placeholder}
            value={value}
            onChangeText={(e) => updateValue(e)}
            multiline={props.multiline}
            numberOfLines={props.lines}
            textAlignVertical='top'
        />
    );
};

Field.defaultProps = {
    lines: 1,
    multiline: false,
}

export default Field;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minWidth: '55%',
        minHeight: 40,
        borderRadius: 14,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 6,
    }
});
