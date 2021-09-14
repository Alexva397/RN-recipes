import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = (data) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === data.item.id);

        return (
            <MealItem
                title={data.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', params: {
                            mealId: data.item.id,
                            mealTitle: data.item.title,
                            isFav: isFavorite,
                        }
                    });
                }}
                duration={data.item.duration}
                complexity={data.item.complexity}
                affordability={data.item.affordability}
                image={data.item.imageUrl}
            />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '90%' }}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
