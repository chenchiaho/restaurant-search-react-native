import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

export default function Search() {
    return (
        <View style={styles.container}>
            <FontAwesome name='search' size={25} /> 
            <TextInput placeholder="Restaurants, food" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
        padding: 15,
        borderRadius: 40
    }
})