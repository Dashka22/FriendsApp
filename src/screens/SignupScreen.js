import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../contexts/UserContex";

const SignupScreen = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const signupHandler = () => {
    setError(null);
    if (name.length === 0) {
      Alert.alert("Та нэрэээ бичнэ үү");
      return;
    }

    if (password1 !== password2) {
      Alert.alert("Нууц үгнүүд хоорондоо таарахгүй байна!");
      return;
    }
    state.signUp(name, email, phone, password1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/signUp.png")} />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
          color: "gray",
        }}
      >
        Шинээр бүртгүүлэх
      </Text>

      {error && (
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      )}

      <MyInput
        mode="outlined"
        label="Нэр"
        value={name}
        placeholder="Та нэрээ оруулна уу"
        onChangeText={setName}
      />
      <MyInput
        mode="outlined"
        label="И-Мэйл"
        value={email}
        placeholder="Та и-мэйл ээ оруулна уу"
        onChangeText={setEmail}
      />
      <MyInput
        mode="outlined"
        label="Утасны дугаар"
        keyboardType="number-pad"
        value={phone.toString()}
        maxLength={8}
        placeholder="Та утасны дугааараа оруулна уу"
        onChangeText={setPhone}
      />

      <MyInput
        mode="outlined"
        label="Нууц үг"
        value={password1}
        secureTextEntry={true}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword1}
      />

      <MyInput
        mode="outlined"
        label="Давтан нууц үг"
        value={password2}
        secureTextEntry={true}
        placeholder="Нууц үгээ давтан оруулна уу"
        onChangeText={setPassword2}
      />
      <MyButton title="Бүртгэх" onPress={signupHandler} />
      <MyButton title="Буцах" onPress={() => navigation.pop()} />
    </View>
  );
};
export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "30%", resizeMode: "contain" },
});
