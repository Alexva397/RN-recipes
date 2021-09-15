import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/seed';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';


const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const selectedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if (selectedMeals.length === 0) {
    return <View style={styles.content}>
      <DefaultText>No meals found, check your filters</DefaultText>
    </View>
  }

  return (
    <MealList
      listData={selectedMeals}
      navigation={props.navigation}
    />
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {

  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCat = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCat.title,
  };


};


const styles = StyleSheet.create({
  content: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default CategoryMealScreen;
