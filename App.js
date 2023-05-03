import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

export default function App() {

    const commonCategories = [
      {
        name: "Burger",
        imageUrl: require("./src/assets/images/burger.png")
      },
      {
        name: "Dessert",
        imageUrl: require("./src/assets/images/cake.png")
      },
      {
        name: "Drink",
        imageUrl: require("./src/assets/images/smoothies.png")
      },
      {
        name: "Steak",
        imageUrl: require("./src/assets/images/steak.png")
      },
      {
        name: "Pasta",
        imageUrl: require("./src/assets/images/pasta.png")
      },
    ]

  return (
    <View style={styles.container}>
      <Header/>
      <Search/>

        <FlatList data={commonCategories} renderItem={({item, index}) => {
        return (
        <commonCategories 
          name={item.name} 
          imageUrl={item.imageUrl} 
          index={index}
          />
        )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}

      />

      
      <StatusBar/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  }
  })