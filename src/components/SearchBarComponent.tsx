import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { COLORS } from '../constants/colors';

export default function SearchBarComponent() {
    const [search, setSearch] = useState('');
    const [showLoading, setShowLoading] = useState(false)

    const updateSearch = (value: String) => {
        setSearch(value)
    }

    const { searchContainer, inputContainer } = styles
    return (
        <View>
            <SearchBar 
                placeholder='Restaurant, food...'
                onChangeText={updateSearch}
                value={search}
                showLoading={showLoading}
                containerStyle={searchContainer}
                inputContainerStyle={inputContainer}
                // inputStyle={}
                // leftIconContainerStyle={}
                lightTheme={true}
                showCancel={false}
                round={true}
                // platform='ios'
                // clearIcon={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: COLORS.RED,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    inputContainer: {
        backgroundColor: COLORS.WHITE,
    }
})