import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import FoodItem from "../components/FoodItem";

export default function HomeScreen({css}) {
    const { container } = styles;
    const items = [
        {
            id: 1,
            image: '',
            name: 'Burgers'
        },
        {
            id: 2,
            image: '',
            name: 'Pizzas'
        },
        {
            id: 3,
            image: '',
            name: 'Desserts'
        },
        {
            id: 4,
            image: '',
            name: 'Fruit & Vegies'
        },
        {
            id: 5,
            image: '',
            name: 'Türk mutfağı'
        },
        {
            id: 5,
            image: '',
            name: 'Breakfast'
        },
]
    return (
        <ScrollView contentContainerStyle={[css, container]}>
            {items.map(item => <FoodItem id={item.id} image={'adana.jpg'} name={item.name} />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
   
})
