import {NavigationContainer}  from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {SafeAreaView}         from "react-native"
import {ScreenDetails}        from "./ScreenDetails"
import {ScreenHome}           from "./ScreenHome"

const Stack          = createStackNavigator()
export const NavMain = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={""}>
        <Stack.Screen name="Home" component={ScreenHome}
                      options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={ScreenDetails}
                      options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>)
}
