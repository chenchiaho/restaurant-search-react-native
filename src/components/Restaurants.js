import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import useRestaurants from '../hooks/useRestaurants'



const Restaurants = ({ term }) => {

  const [{ data, loading, error }, searchRestaurants] = useRestaurants()


  useEffect(() => {
    searchRestaurants(term)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10
  }
})

export default Restaurants