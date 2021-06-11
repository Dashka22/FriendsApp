import React, { useState, useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import MyInput from "../components/MyInput";
import { withTheme } from "react-native-paper";
import CardTitle from "../components/CardTitle";
import MyButton from "../components/MyButton";
import UserContext from "../contexts/UserContex";
import { firebase } from "../../firebase/config";

const db = firebase.firestore();
const HomeScreen = ({ navigation, colors, fonts }) => {
  const state = useContext(UserContext);
  const [bill, setBill] = useState("");
  const sendBill = () => {
    if (state.myFriends.length === 0) {
      Alert.alert("Хамт тооцоо хуваалца найзаа нэмнэ үү");
    } else {
      const batch = db.batch();
      state.myFriends.map((el) => {
        let newRef = db.collection("users").doc(`${el.id}`);
        batch.update(newRef, {
          bill: parseInt(bill / (state.myFriends.length + 1)),
        });
      });

      batch
        .commit()
        .then(() => {
          conssole.log("amjilttai");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleRemove = (name) => {
    state.setMyFriends((prevState) =>
      prevState.filter((el) => el.name !== name)
    );
  };
  return (
    <View style={styles.container}>
      <MyInput
        mode="outlined"
        value={bill.toString()}
        label="Тооцооны нийт үнэ"
        placeHolder="Нийт үнэ"
        onChangeText={setBill}
        keyboardType="number-pad"
      />
      <FlatList
        style={styles.flatList}
        keyExtractor={(person) => person.key}
        data={state.myFriends}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleRemove(item.name)}>
            <CardTitle
              title={item.name}
              bill={parseInt(bill / (state.myFriends.length + 1))}
              withBill
            />
          </TouchableOpacity>
        )}
      />
      <MyButton
        mode="text"
        labelStyle={{ color: "#FFA451", fontSize: 18 }}
        title="Найз нэмэх"
        onPress={() => navigation.navigate("Friendlist")}
      />
      <MyButton title="Илгээх" onPress={sendBill} />
    </View>
  );
};

export default withTheme(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingVertical: 80,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  flatList: {
    marginVertical: 40,
    width: "100%",
  },
});
