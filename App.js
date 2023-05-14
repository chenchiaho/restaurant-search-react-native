import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { createAppContainer } from "react-navigation";
import RestaurantScreen from "./src/screens/RestaurantScreen";


const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: "RestaurantSearch"
  }
})

export default createAppContainer(navigator)