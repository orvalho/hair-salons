import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default ({location, onLocationChange, onLocationSubmit}) => {
    return (
        <View style={styles.container}>
            <AntDesign name="search1" style={styles.icon}/>
            <TextInput 
                value={location} 
                onChangeText={onLocationChange}
                onEndEditing={onLocationSubmit}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter location"
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#E3E3E3',
        flexDirection: 'row'
    },
    icon: {
        alignSelf: 'center',
        fontSize: 25,
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        fontSize: 18
    }
});