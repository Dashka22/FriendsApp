import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, withTheme } from "react-native-paper";

const MyButton = (props) => {
  const { mode, onPress, title } = props;
  return (
    <View style={styles.button}>
      <Button
        dark={true}
        mode={mode || "contained"}
        onPress={onPress}
        color="#FFA451"
        labelStyle={{ color: "white", fontSize: 18 }}
        {...props}
      >
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    width: 200,
  },
});
export default withTheme(MyButton);
