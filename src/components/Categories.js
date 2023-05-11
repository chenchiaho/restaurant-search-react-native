import React from 'react'
import CategoryItem from './CategoryItem'
import { FlatList, View } from 'react-native'

const Categories = ({ term, setTerm, commonCategories }) => {
  return (
    <View>
      <FlatList data={commonCategories} renderItem={({ item, index }) => {
        return (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        )
      }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  )
}

export default Categories