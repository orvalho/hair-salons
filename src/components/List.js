import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import Item from './Item';

const List = ({navigation, title, salons}) => {
    if (!salons.length) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                keyExtractor={salon => salon.id}
                data={salons}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                        navigation.navigate('Details', {id: item.id, name: item.name})}}>
                            <Item salon={item}/>
                        </TouchableOpacity>
                    );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(List);