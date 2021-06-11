import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStackNavigator from "./src/navigation/MyStackNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { UserStore } from "./src/contexts/UserContex";
function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 15,
    colors: {
      ...DefaultTheme.colors,
      primary: "#FFA451",
      accent: "#4CD964",
      background: "#FFFFFF",
      text: "#000000",
      placeholder: "#C2BDBD",
    },
    fonts: {
      regular: 5,
      medium: 15,
      light: 20,
      thin: 10,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <UserStore>
          <MyStackNavigator />
        </UserStore>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
