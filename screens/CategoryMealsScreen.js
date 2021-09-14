import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/seed';
import MealList from '../components/MealList';


const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const selectedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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
