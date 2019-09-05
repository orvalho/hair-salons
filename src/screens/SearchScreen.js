import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';
import List from '../components/List';
import useSalons from '../hooks/useSalons';

export default () => {
    const [location, setLocation] = useState('');
    const [searchApi, salons, errorMessage] = useSalons();
    const filterSalonsByPrice = price => salons.filter(salon => salon.price === price);
    
    return (
        <>
            <SearchBar 
                location={location} 
                onLocationChange={setLocation} 
                onLocationSubmit={() => searchApi(location)}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <ScrollView>
                <List title="Inexpensive" salons={filterSalonsByPrice('$')}/>
                <List title="Moderate" salons={filterSalonsByPrice('$$')}/>
                <List title="Pricey" salons={filterSalonsByPrice('$$$')}/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    error: {
        marginLeft: 15
    }
});
