import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/seed';
import MealItem from '../components/MealItem';


const CategoryMealScreen = props => {

  const renderMealItem = (data) => {
    return (
      <MealItem
        title={data.item.title}
        onSelect={() => {
          props.navigation.navigate({ routeName: 'MealDetail', params: {
            mealId: data.item.id,
          } });
        }}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        image={data.item.imageUrl}
      />
    );
  }

  const catId = props.navigation.getParam('categoryId');

  const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList 
        data={selectedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '90%'}}
      />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
