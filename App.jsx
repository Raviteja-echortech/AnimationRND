import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnboardingScreenCuberto from "./Pages/onBoarding/onBoarding";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onBoarding">
        <Stack.Screen name="onBoarding" component={OnboardingScreenCuberto} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
