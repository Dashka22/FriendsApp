import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Title, Avatar } from "react-native-paper";
import MyButton from "../components/MyButton";
import UserContext from "../contexts/UserContex";

const SettingsScreen = () => {
  const state = useContext(UserContext);
  return (
    <View style={styles.container}>
      <View style={styles.about}>
        <Title>{state.userName}</Title>
        <Title>{state.email}</Title>

        <Avatar.Image
          size={100}
          source={require("../../assets/icon_round.png")}
          style={{ marginVertical: 20 }}
        />
        <Title>Таны хуваалцах дүн</Title>
        <Title>{state.bill}</Title>
      </View>
      <Title>Leap 1 Dashka</Title>
      <MyButton
        mode="text"
        labelStyle={{ color: "#FFA451", fontSize: 18 }}
        title="Гарах"
        onPress={state.logout}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  about: {
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    marginVertical: 80,
  },
});
