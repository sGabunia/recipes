import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailsScreen } from "../screens/MealDetailsScreen";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { log } from "react-native-reanimated";

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          options={{
            title: "Meals Categories",
            headerStyle: {
              backgroundColor: "firebrick",
            },
            headerTintColor: "#fff",
          }}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="CategoryMeals"
          options={({ route }) => {
            const { categoryId } = route.params;
            const selected = CATEGORIES.find((cat) => cat.id === categoryId);

            return {
              title: selected.title,
              headerStyle: { backgroundColor: selected.color },
              headerTintColor: "#fff",
            };
          }}
          component={CategoryMealsScreen}
        />
        <Stack.Screen
          name="MealDetails"
          options={({ route }) => ({ title: route.params.name })}
          component={MealDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
