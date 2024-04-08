

import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {useLoaderData} from 'react-router-dom'
const Property = () => {
    const [item,setItem] = useState({});
    const {id} = useParams();
    const resturants = useLoaderData()
    useEffect()
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Property;