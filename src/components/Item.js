import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default ({salon}) => {
    const {name, image_url, rating, review_count} = salon;
    return (
        <View style={styles.container}>
            <Image source={{uri: image_url}} resizeMethod="resize" style={styles.image}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{rating} Stars, {review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    image: {
        height: 150,
        width: 200,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    description: {
        color: '#4A4B50'
    }
});