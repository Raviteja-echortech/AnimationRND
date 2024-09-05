import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Pages/Home/Home"
import SinglePage from "./Pages/Home/SinglePage";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="singlePage" component={SinglePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
