import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import { elevation } from '../common/styles'

export default function Search({ setTerm }) {

    const [input, setInput] = useState("")

    const handleEndEditing = () => {
        if (!input) return
        setTerm(input)
    }

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name='search' size={25} />
            <TextInput
                style={styles.input}
                placeholder="Restaurants, food"
                onChangeText={(text) => { setInput(text) }}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: '#fff',

        padding: 15,
        borderRadius: 40
    },
    elevation,
    input: {
        fontSize: 20,
        marginLeft: 10
    }

})