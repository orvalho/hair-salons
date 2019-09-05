import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

export default ({salon}) => {
    if (!salon) return null;

    const {name, display_phone, location, is_closed, photos} = salon;
    
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            {is_closed ? <Text style={styles.closed}>CLOSED</Text> : <Text style={styles.open}>OPEN</Text>}
            <View style={styles.wrapper}>
                <View>
                    <Text>{location.display_address[0]}</Text>
                    <Text>{location.display_address[1]}</Text>
                    {location.display_address[2] ? <Text>{location.display_address[2]}</Text> : null}
                </View>
                <Text>{display_phone}</Text>
            </View>
            <FlatList
                keyExtractor={photo => photo}
                data={photos}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} resizeMethod="resize" style={styles.image}/>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    closed: {
        color: 'red',
        fontWeight: 'bold'
    },
    open: {
        color: 'green',
        fontWeight: 'bold'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    image: {
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginVertical: 5,
        borderRadius: 5,
        alignSelf: 'center'
       }
});