import React, { useState, useContext } from "react";
import { Image, StyleSheet, SafeAreaView, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../contexts/UserContex";
import Spinner from "../components/Spinner";
const LoginScreen = ({ navigation }) => {
  const state = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const loginHandler = () => {
    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Та нууц үгээ бичнэ үү");
      return;
    }

    state.login(email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../../assets/signIn.png")} />
      {state.isLoading ? (
        <Spinner />
      ) : (
        <>
          <MyInput
            mode="outlined"
            placeholder="Та и-мэйл ээ оруулна уу"
            onChangeText={setEmail}
            value={email}
            label="И-мэйл"
          />

          <MyInput
            mode="outlined"
            secureTextEntry={true}
            placeholder="Нууц үгээ оруулна уу"
            onChangeText={setPassword}
            value={password}
            label="Нууц үг"
          />
          <MyButton
            style={{ marginTop: 40 }}
            title="Нэвтрэх"
            onPress={loginHandler}
          />
          <MyButton
            title="Бүртгүүлэх"
            onPress={() => navigation.navigate("Signup")}
          />
        </>
      )}
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "50%", resizeMode: "contain" },
});
