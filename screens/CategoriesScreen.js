import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CategoryGridTile } from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderGridItems = (itemData) => {
    return (
      <CategoryGridTile
        itemData={itemData}
        onSelect={() =>
          navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          })
        }
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
