

import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {useLoaderData} from 'react-router-dom'
const Property = () => {
    const [item,setItem] = useState({});
    console.log(item);
    const {id} = useParams();
    const resturants = useLoaderData()
    console.log(resturants)
    useEffect(() => {
        const data = resturants.find((resturant)=>resturant.id===id);
        if(data){
            setItem(data)
            console.log(data) 
        }
    }, [resturants, id]);
    return (
        <div>
            <h1>{id.image}</h1>
        </div>
    );
};

export default Property;