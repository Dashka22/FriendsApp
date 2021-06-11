import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const Spinner = ({ showText = true }) => {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <ActivityIndicator size="large" color="#FFA451" />
      {showText && (
        <Text style={{ top: 10, fontWeight: "bold", fontSize: 18 }}>
          Түр хүлээнэ үү...
        </Text>
      )}
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({});
