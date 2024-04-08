import {useLoaderData} from 'react-router-dom'

const Home = () => {
    const resturants = useLoaderData();
    console.log(resturants)
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;