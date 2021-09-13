import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';


const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree: glutenFree,
      isLactoseFree: lactoseFree,
      isVegan: vegan,
      isVegetarian: vegetarian,
    };

    console.log(appliedFilters)
  }, [glutenFree, lactoseFree, vegan, vegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label='Gluten-Free'
        state={glutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-Free'
        state={lactoseFree}
        onChange={newValue => setLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={vegan}
        onChange={newValue => setVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={vegetarian}
        onChange={newValue => setVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (data) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            data.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={data.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  }
});

export default FiltersScreen;
