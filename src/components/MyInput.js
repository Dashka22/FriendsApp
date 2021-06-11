import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
const MyInput = (props) => {
  const { mode, label, placeHolder, rightLimit } = props;
  return (
    <View style={styles.input}>
      <TextInput
        mode={mode || "flat"}
        label={label || "Outlined input"}
        placeholder={placeHolder || "Type something"}
        right={
          rightLimit ? <TextInput.Affix text={"/" + rightLimit} /> : "none"
        }
        {...props}
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  input: {
    width: 300,
    marginVertical: 5,
  },
});
