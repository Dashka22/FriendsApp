import React, { useState, useContext } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Search from "../components/Search";
import CardTitle from "../components/CardTitle";
import Spinner from "../components/Spinner";
import usePeople from "../hooks/usePeople";
import UserContext from "../contexts/UserContex";
const AddFriendScreen = () => {
  const state = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [peopleList, loading] = usePeople();
  const filteredPeopleList = peopleList.filter(
    (el) => el.id !== state.userId && el.name.includes(search)
  );
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
            <TouchableOpacity onPress={addNewItem}>
              <CardTitle
                title={item.name}
                subTitle={item.phone}
                onPress={() => handleClick(item.name)}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default AddFriendScreen;

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
