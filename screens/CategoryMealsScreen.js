import React from 'react';

import { CATEGORIES, MEALS } from '../data/seed';

import MealList from '../components/MealList';


const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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


export default CategoryMealScreen;
