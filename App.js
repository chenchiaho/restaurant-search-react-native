import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
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