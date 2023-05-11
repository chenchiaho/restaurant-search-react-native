import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { elevation } from '../common/styles'

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={[styles.elevation, styles.container]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View>
        <Text>{restaurant.name}</Text>
        <View>
          <Text>{restaurant.rating}</Text>
          <Text>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10
  }
})

export default RestaurantItem