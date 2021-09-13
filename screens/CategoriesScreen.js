import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/seed';
import CategoryGridItem from '../components/CategoryGridItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

const CategoriesScreen = props => {

  const renderCatItem = (data) => {
    return (
      <CategoryGridItem
        title={data.item.title}
        color={data.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: data.item.id,
            }
          });
        }}
      />
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderCatItem}
    />
  );
};

CategoriesScreen.navigationOptions = (data) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          data.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default CategoriesScreen;
