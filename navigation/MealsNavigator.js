import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import colors from '../constants/colors';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen
  },
}, {
  // mode: 'modal',
  defaultNavigationOptions: defaultStackNavOptions,
});

const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen
  },
  MealDetail: {
    screen: MealDetailScreen
  }
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: colors.primaryColor
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: colors.secondaryColor
    },
  },
}

const MealsTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: 'white',
  shifting: true,
  //******  switch shifting to false for this to work
  // barStyle: {
  //   backgroundColor: colors.primaryColor
  // },
}) : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: colors.secondaryColor
  }
});

export default createAppContainer(MealsTabNavigator);
