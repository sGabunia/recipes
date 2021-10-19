import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MealItem } from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export const CategoryMealsScreen = ({ navigation, route }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        {...itemData.item}
        onSelect={() =>
          navigation.navigate("MealDetails", {
            mealId: itemData.item.id,
            name: itemData.item.title,
          })
        }
      />
    );
  };
  const { categoryId } = route.params;
  const selected = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  console.log(displayedMeals);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
