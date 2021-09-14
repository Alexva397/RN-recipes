import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {

    const renderMealItem = (data) => {
        return (
            <MealItem
                title={data.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', params: {
                            mealId: data.item.id,
                            mealTitle: data.item.title,
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
