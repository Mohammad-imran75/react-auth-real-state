import {useLoaderData} from 'react-router-dom'
import Resturant from './Resturant';

const Home = () => {
  const resturants = useLoaderData();
  console.log(resturants);
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
      {
        resturants.map(resturant => <Resturant key={resturant.id} resturant={resturant}></Resturant>)
      }
    </div>
  );
};

export default Home;