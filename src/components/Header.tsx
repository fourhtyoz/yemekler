import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import SearchBarComponent from "./SearchBarComponent";

export default function Header() {
    const { container, headerText, headerSlogan } = styles
    return (
        <View style={container}>
            <Text style={headerText}>Yemekler</Text>
            <SearchBarComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.RED,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    headerText: {
        color: COLORS.WHITE,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    headerSlogan: {
        color: COLORS.WHITE,
        fontSize: 20,
    }
})