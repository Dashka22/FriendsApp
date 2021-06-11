import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const CardTitle = ({
  title,
  withBill,
  subTitle,
  onPress,
  imageUrl,
  withDelete,
  bill,
}) => {
  return (
    <View style={styles.card}>
      <Card.Title
        title={title || "Нэр өгөгдөөгүй"}
        subtitle={subTitle}
        left={() => (
          <Avatar.Image
            size={40}
            source={
              imageUrl
                ? { uri: imageUrl }
                : require("../../assets/icon_round.png")
            }
          />
        )}
        right={
          withDelete
            ? () => (
                <IconButton
                  size={30}
                  color="#FFA451"
                  icon="delete"
                  onPress={onPress}
                />
              )
            : withBill
            ? () => <Text>{bill ? bill : 0}</Text>
            : null
        }
      />
    </View>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  card: {
    marginVertical: 0,
    width: "100%",
  },
});
