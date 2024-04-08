import {useLoaderData} from 'react-router-dom'
import Resturant from './Resturant';
import Banner from './Banner';

const Home = () => {
  const resturants = useLoaderData();
  console.log(resturants);
  return (
    
   <div>
    <Banner></Banner>
    <h1 className='text-center mt-7 font-bold text-5xl'><span className='text-orange-400'>Resturant</span> Real  <span className='text-orange-500'>Estate</span><br /> Section</h1>
     <div className='grid lg:grid-cols-3 gap-6 mt-10'>
      
      {
        resturants.map(resturant => <Resturant key={resturant.id} resturant={resturant}></Resturant>)
      }
    </div>
   </div>
  );
};

export default Home;