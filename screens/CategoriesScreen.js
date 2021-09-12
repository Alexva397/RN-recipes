import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/seed';
import colors from '../constants/colors';
import { color } from 'react-native-reanimated';

const CategoriesScreen = props => {

  const renderCatItem = (data) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      >
        <View>
          <Text>{data.item.title}</Text>
        </View>
      </TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
  title: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor, 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
