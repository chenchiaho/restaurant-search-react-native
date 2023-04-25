import { View, Text, StyleSheet, Image } from "react-native";
import {elevation} from '../common/styles';

export default function CategoryItem({name, imageUrl}) {



    return (
    <View style={[styles.container, styles.elevation]}>
        <View style={styles.imageContainer}>
            <Image source={imageUrl} style={styles.image} />
        </View>

        <Text style={styles.header}>
            {name}
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        marginHorizontal: 25,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5
    },
    header: {
        fontWeight: 'bold'
    }

})