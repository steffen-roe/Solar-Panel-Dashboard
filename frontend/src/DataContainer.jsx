import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartRenderer from './components/ChartRenderer/ChartRenderer';

function DataContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [range, setRange] = useState("day");
    const [type, setType] = useState("line");

    // Fetch data from the API
    const fetchData = async () => {
        try {
            setLoadingButton(true);
            const response = await axios.get(
                `/dev/data?range=${range}`
            );
            setData(response.data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please try again later.');
        }
        finally {
            setLoading(false);
            setLoadingButton(false);
        }
    };

    // Fetch data on mount or range change
    useEffect(() => {
        fetchData();
    }, [range]);

    return (
        loading ? (
            <p>Loading data...</p>
            ) : (
            <ChartRenderer data={data} range={range} type={type} setType={setType} />  
            )
    )
}

export default DataContainer;