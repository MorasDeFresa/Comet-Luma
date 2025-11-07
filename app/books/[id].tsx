import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BookDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Book detail: {id}</Text>
        </View>
    )
}

export default BookDetails

const styles = StyleSheet.create({})