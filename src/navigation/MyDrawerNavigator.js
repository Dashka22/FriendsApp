import React from "react";
import HomeScreen from "../screens/HomeScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import FriendlistScreen from "../screens/FriendlistScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const MyDrawerNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#FFA451",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Нүүр",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Friendlist"
        component={FriendlistScreen}
        options={{
          tabBarLabel: "Миний найзууд",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{
          tabBarLabel: "Найз нэмэх",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Тохиргоо",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyDrawerNavigator;
