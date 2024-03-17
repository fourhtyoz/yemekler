import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import OptionItem from "../components/OptionItem";

export default function HomeScreen({css}) {
    const { container } = styles;
    let itemsN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <ScrollView contentContainerStyle={[css, container]}>
            {itemsN.map(item => <OptionItem id={1} image={'adana.jpg'} name={'Food'} />)}
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
