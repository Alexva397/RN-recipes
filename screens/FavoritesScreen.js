import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';


const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);


  return (
    <MealList 
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};

FavoritesScreen.navigationOptions = (data) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          data.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  };
}


export default FavoritesScreen;
