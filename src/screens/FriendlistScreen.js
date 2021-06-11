import React, { useState, useContext } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Search from "../components/Search";
import CardTitle from "../components/CardTitle";
import usePeople from "../hooks/usePeople";
import Spinner from "../components/Spinner";
import UserContext from "../contexts/UserContex";
import { firebase } from "../../firebase/config";
const FriendlistScreen = () => {
  const state = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [removeLoading, setRemoveLoading] = useState(false);
  const [peopleList, loading] = usePeople(removeLoading);
  const filteredPeopleList = peopleList.filter(
    (el) => el.id !== state.userId && el.name.includes(search)
  );
  const handleRemove = (data) => {
    setRemoveLoading(true);
    firebase
      .firestore()
      .collection("users")
      .doc(data.key)
      .delete()
      .then(() => {
        setRemoveLoading(false);
        console.log(`${data.name} хэрэглэгч устгагдлаа`);
      });
  };

  const addFriendToBill = (data) => {
    if (state.myFriends.indexOf(data) !== -1) {
      return;
    } else {
      state.setMyFriends((prevState) => [...prevState, data]);
    }
  };
  return (
    <View style={styles.container}>
      <Search style={styles.search} onChangeText={setSearch} value={search} />
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          style={styles.flatList}
          keyExtractor={(person) => person.key}
          data={filteredPeopleList}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => addFriendToBill(item)}>
              <CardTitle
                withDelete
                title={item.name}
                subTitle={item.phone}
                onPress={() => handleRemove(item)}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default FriendlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingVertical: 30,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  search: {
    marginVertical: 20,
  },
  flatList: {
    width: "100%",
  },
});
