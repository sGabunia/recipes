import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const CategoryGridTile = ({ itemData, onSelect }) => {
  return (
    <TouchableOpacity style={styles.greedItem} onPress={onSelect}>
      <View
        style={{
          ...styles.container,
          ...{ backgroundColor: itemData.item.color },
        }}
      >
        <Text numberOfLines={2}>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  greedItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    elevation: 3,
    padding: 10,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
