import {useState, useEffect} from 'react';

import yelp from '../apis/yelp';

export default () => {
    const [salons, setSalons] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async location => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    location,
                    categories: "hair",
                    limit: 50                
                }
            });
            setSalons(response.data.businesses);
        } catch(e) {
            setErrorMessage('Something went wrong...');
        }
    };

    useEffect(() => {searchApi('Chicago')}, []);

    return [searchApi, salons, errorMessage];
};
