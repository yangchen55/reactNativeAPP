import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 5,
        flexDirection: "row"
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: colors.textLight, flex: 1, padding: 10

    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1

    }
})

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>

            </TouchableOpacity>
            <TextInput style={styles.input} {...props} />

        </View>

    )
}
