import React, {useState, useEffect} from 'react';

import Detail from '../components/Detail';
import yelp from '../apis/yelp';

const DetailsScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [salon, setSalon] = useState(null);
    
    const getSalon = async () => {
        const response = await yelp.get(`/${id}`);
        setSalon(response.data);
    };

    useEffect(() => {getSalon()}, []);

    return <Detail salon={salon}/>
};


DetailsScreen.navigationOptions = ({navigation}) => {
    return {title: navigation.getParam('name')};
};

export default DetailsScreen;
