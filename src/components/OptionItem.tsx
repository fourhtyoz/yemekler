import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import { COLORS } from "../constants/colors";

export default function OptionItem({id, name, image}) {
    const { item, itemText, imageStyles } = styles;
    return (
        <View style={item}>
            <Image style={imageStyles} source={require('../../assets/adana.jpg')} />
                <Text style={itemText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: 105,
        height: 105,
        backgroundColor: 'gray',
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    itemText: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 70 / 2,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        padding: 5
    },
    imageStyles: {
        height: 105,
        width: 105,
        resizeMode: 'cover',
        overflow: 'hidden',
        borderRadius: 10,
    }
})