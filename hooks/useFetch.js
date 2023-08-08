import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const rapidApiKey = process.env.RAPID_API_KEY;
    // console.log(rapidApiKey);
    // console.log(data);

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': 'd9dfbd2b30mshd1fb113fbbc301ep1fb14djsn7b419ddfb617',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	};
    
    const fetchData = async () => {
        setIsLoading(true);
        // const response = await axios.request(options);
        // setData(response.data.data);
        
        console.log(data)
        try {
        const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
    }

    return {data, isLoading, error, refetch}
};

export default useFetch;