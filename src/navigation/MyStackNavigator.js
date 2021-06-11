import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import MyDrawerNavigator from "./MyDrawerNavigator";
import UserContext from "../contexts/UserContex";
const Stack = createStackNavigator();
const MyStackNavigator = () => {
  const state = useContext(UserContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {state.isLoggedIn ? (
        <Stack.Screen name="Home" component={MyDrawerNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default MyStackNavigator;
